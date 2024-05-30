import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideImage.css"



const ImageCarousel = () => {
  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };


  return (
    <Slider {...settings}>
    <div>
      <img src="./images/ImageSlider3.jpg" alt="Image 1" className='slideImage' />
    </div>
    <div>
      <img src="./images/ImageSlider1.png" alt="Image 2"  className='slideImage'/>
    </div>
    <div>
      <img src="./images/ImageSlider2.jpg" alt="Image 3" className='slideImage' />
    </div>
    <div>
      <img src="./images/ImageSlider4.jpg" alt="Image 3" className='slideImage' />
    </div>
    <div>
      <img src="./images/ImageSlider5.jpg" alt="Image 3" className='slideImage' />
    </div>



  </Slider>
  )
}

export default ImageCarousel
