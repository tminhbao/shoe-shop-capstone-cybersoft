import React from 'react'
import CardItem from '../CardItem/CardItem';
import '../../assets/sass/components/search/searchResult.scss'
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const {productSearch} = useSelector(state=>state.productReducer)
  const renderProductList = () => {
    if (productSearch?.length !==0) {
      return productSearch?.map((item, i) => {
        return <div className='col col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
          <CardItem item={item} />
        </div>
      })
    } else {
      return <div className='ERROR'>404</div>
    }
  }
  return (
    <div className='searchResult'>
      <h1 className='title ps-5 py-2 text-light'>Search result</h1>
      <div className='container'>
        <form>
          <div className='title-form'>Price</div>
          <select id="">
            <option value="decrease">Decrease</option>
            <option value="ascending">Ascending</option>
          </select>
        </form>
        <div className='list-product my-5'>
          <div className='row g-5'>
            {renderProductList()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
