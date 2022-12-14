import React from 'react'
import { Carousel } from 'antd';

// SCSS
import '../../assets/sass/components/carousel/carousel.scss'

const contentStyle = {
    margin: 0,
    height: '30rem',
    color: '#fff',
    background: '#364d79',
};

const Carou = () => {
    return (
        <Carousel>
            <div>
                <div style={contentStyle}>1</div>
            </div>
            <div>
                <div style={contentStyle}>2</div>
            </div>
            <div>
                <div style={contentStyle}>3</div>
            </div>
        </Carousel>
    );
}

export default Carou