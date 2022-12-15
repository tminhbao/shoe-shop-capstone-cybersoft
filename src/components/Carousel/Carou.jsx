import React from 'react'
import { useSelector } from 'react-redux';
import { Carousel } from 'antd';

// SCSS
import '../../assets/sass/components/carousel/carousel.scss'
import { NavLink } from 'react-router-dom';

const contentStyle = {
    margin: 0,
    color: '#000000',
    background: '#F5F5F5',
};

const Carou = () => {
    const { product } = useSelector(state => state.productReducer)
    const carousel = product?.filter(item => item.id === 1 || item.id === 2 || item.id === 3)
    return (
        <Carousel dots={{ className: 'dots' }} prevArrow nextArrow >
            {carousel?.map((item, i) => {
                return <div key={i}>
                    <div style={contentStyle}>
                        <div className='d-lg-flex d-md-flex d-sm-flex d-none'>
                            <button>-</button>
                            <div className='item-left position-relative'>
                                <img className='w-100 position-absolute top-50 start-50 translate-middle' src={item.image} alt="..." />
                            </div>
                            <div className='item-right'>
                                <h3 className='name'>{item.name}</h3>
                                <p className='description'>{item.description}</p>
                                <NavLink to={`/detail/${item.id}`} className='btn'>Buy now</NavLink>
                            </div>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            })}
        </Carousel>
    );
}

export default Carou