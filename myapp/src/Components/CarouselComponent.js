
import React from 'react';
import image1 from "../images/BupnRwHHsqdCpxSd.jpg";
import image2 from "../images/photo-adobe-stock-1685976455.jpg";
import image3 from "../images/pourquoi-utiliser-logiciel-estimation-immobiliere-utilite-avantages.jpg"
import { Carousel } from 'antd';
import "../App.css"


const MyCarousel = () => {
  return (
    <div className="my-carousel-container">   
    <Carousel autoplay>
      <div>
        <img src={image2} alt="Image 1" className="my-carousel-image"  />
      </div>
      <div>
        <img src={image3} alt="Image 2" className="my-carousel-image" />
      </div>
      <div>
        <img src={image1} alt="Image 3" className="my-carousel-image" />
      </div>
    </Carousel>
    </div>
  );
}

export default MyCarousel;
