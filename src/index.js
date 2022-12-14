import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";

// Setup Redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

// SASS
import './/assets/sass/index.scss'
import { createBrowserHistory } from "history";

export const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
