import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Products from '../data';
import Sidebar from './Sidebar';
import HomeProductList from './HomeProductList';
import './css/home.css';

const Home = () => (
  <>
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {Products.map((product) => (
        <SwiperSlide className="products-info" key={product.id}>
          <img className="photo" src={product.photo} alt="productphoto" />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="product-container">
      <Sidebar />
      <HomeProductList />
    </div>
  </>
);

export default Home;
