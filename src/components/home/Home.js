import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Sliderimages } from '../../data';
import Sidebar from '../shared/Sidebar';
import HomeProductList from './HomeProductList';
import '../css/home.css';

const Home = () => (
  <div className="home-container">
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {Sliderimages.map((sliderimage) => (
        <SwiperSlide className="products-info" key={sliderimage.id}>
          <img className="photo" src={sliderimage.photo} alt="productphoto" />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="product-container">
      <Sidebar />
      <HomeProductList />
    </div>
  </div>
);

export default Home;
