import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../redux/reducers/productReducer'
import CardItem from '../../components/CardItem/CardItem'

const Detail = () => {
  const { productDetail } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(()=>{
    const actionAsync = getProductDetailApi(param.id)
    dispatch(actionAsync)
  }, [param.id])

  return (
    <div className='detail'>
      <div className='detail-prod'>
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
                    {productDetail?.size.map((item, i)=>{
                      return <button className='size-box mx-1 btn' key={i}>
                        {item}
                      </button>
                    })}
                  </div>
                  <div className='price'>
                    <h4>{productDetail?.price}$</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='realate'>
        <h3 className='title'>- Realate Product -</h3>
        <div className='contaner'>
          <div className='row g-5'>
            {productDetail?.relatedProducts.map((item, i)=>{
              return <div className='col col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                <CardItem item={item}/>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail