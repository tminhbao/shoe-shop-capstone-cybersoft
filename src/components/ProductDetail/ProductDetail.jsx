import React from 'react'

const ProductDetail = ({productDetail}) => {
  return (
    <div className='productDetail'>
      <div className='container'>
        <div className='d-flex'>
          <div className='item-left'>
            <div className='img-item'>
              <img src={productDetail?.image} alt="..." />
            </div>
          </div>
          <div className='item-right'>
            <div className='info'>
              <h3 className='name'>{productDetail?.name}</h3>
              <p className='description'>{productDetail?.description}</p>
              <div className='size'>
                <h4 className='title'>Available size</h4>
                <div className='size-list d-flex'>
                  {productDetail?.size.map((item, i) => {
                    return <button className='size-box mx-1 btn' key={i}>
                      {item}
                    </button>
                  })}
                </div>
                <div className='price'>
                  <h4>{productDetail?.price}$</h4>
                </div>
                <div className='input'>
                  <button className='btn num-box'>+</button>
                  <input className='input-num' type="number" />
                  <button className='btn num-box'>-</button>
                </div>
                <button className='btn add-box'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
