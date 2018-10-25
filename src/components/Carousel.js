import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner from '../images/banner.png'
import banner3 from '../images/banner3.png'

export class Carousel1 extends Component {
    render() {
        return (
            <Carousel showThumbs={false} emulateTouch={true} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img className="img-fluid" src={banner} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="img-fluid" src={banner3} alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}