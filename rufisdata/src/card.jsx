import React, { Component } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default class MultipleItems extends Component {
    render() {
      const settings = {
        className: 'slider',
        centerPadding: '20px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className="testimonial">
            <span className="top">Testimonial</span>
          <h1> Trusted By Our Clients </h1>
          <Slider {...settings}>
            <div className="card">
              <div className="new">
                hiii
              </div>
            </div>
            <div className="card">
              <div>
                hello
              </div>
            </div>
            <div className="card">
                <div>
              <h3>my name is stephen</h3>
                </div>
            </div>
            <div className="card">
             <div>
                hey
             </div>
            </div>
          </Slider>
        </div>
      );
    }
  }