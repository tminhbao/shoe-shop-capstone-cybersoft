import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/sass/components/productFeature/productFeature.scss'

const ProductFeature = () => {
  return (
    <div className='py-5'>
      <h2 className='title ps-4 py-2 w-25 text-light'>Product Feature</h2>
      <div className='container pt-5'>
        <div className='row g-5'>
          <div className='col-4'>
            <div className='card'>
              <img className='px-5 pt-4 w-100' src="../image/image 5.png" alt="..." />
              <div className='card-body'>
                <h5 className='card-title'>Name</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum.</p>
              </div>
              <div className='d-flex text-center'>
                <NavLink className='buy-btn w-50 text-dark py-3'>Buy now</NavLink>
                <div className='price w-50 py-3'>850$</div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img className='px-5 pt-4 w-100' src="../image/image 5.png" alt="..." />
              <div className='card-body'>
                <h5 className='card-title'>Name</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum.</p>
              </div>
              <div className='d-flex text-center'>
                <NavLink className='buy-btn w-50 text-dark py-3'>Buy now</NavLink>
                <div className='price w-50 py-3'>850$</div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img className='px-5 pt-4 w-100' src="../image/image 5.png" alt="..." />
              <div className='card-body'>
                <h5 className='card-title'>Name</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum.</p>
              </div>
              <div className='d-flex text-center'>
                <NavLink className='buy-btn w-50 text-dark py-3'>Buy now</NavLink>
                <div className='price w-50 py-3'>850$</div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img className='px-5 pt-4 w-100' src="../image/image 5.png" alt="..." />
              <div className='heart-icon'><i class="text-danger fa fa-heart"></i></div>
              <div className='card-body'>
                <h5 className='card-title'>Name</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum.</p>
              </div>
              <div className='d-flex text-center'>
                <NavLink className='buy-btn w-50 text-dark py-3'>Buy now</NavLink>
                <div className='price w-50 py-3'>85$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeature