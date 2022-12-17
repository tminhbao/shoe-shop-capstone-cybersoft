import React from 'react'
import SearchResult from '../../components/SearchResult/SearchResult'

const Search = () => {
  return (
    <div className='search'>
      <div className='container'>
        <form className='form-groud'>
          <div className='title'>Search</div>
          <input type="text" name='input-search' />
          <button className='btn submit' type='submit'>Search</button>
        </form>
      </div>
      <SearchResult/>
    </div>
  )
}

export default Search