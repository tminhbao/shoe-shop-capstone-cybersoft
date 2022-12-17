import React from 'react'

const SearchResult = () => {
  return (
    <div className='searchResult'>
      <h1 className='title'>Search result</h1>
      <div className='container'>
        <form>
          <div className='title'>Price</div>
          <select id="">
            <option value="decrease">Decrease</option>
            <option value="ascending">Ascending</option>
          </select>
        </form>
        <div className='list-product'>
          <div className='row'>
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
