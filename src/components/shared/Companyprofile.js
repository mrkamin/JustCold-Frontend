import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Sliderimages } from '../../data';
import '../css/companyprofile.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Companyprofile = () => (
  <div className="company-profile">
    <h2>Company Profile</h2>
    <div className="profile-conatainer">
      <div className="profile-slider">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Sliderimages.map((sliderimage) => (
            <SwiperSlide className="profile-info" key={sliderimage.id}>
              <img className="profile-photo" src={sliderimage.photo} alt="productphoto" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" className="profile-btn">See More</button>
      </div>
      <div className="profile-title">
        <p className="profile-p">Business Type:</p>
        <p className="profile-p">Main Products:</p>
        <p className="profile-p">Registered Capital:</p>
        <p className="profile-p">Plant Area:</p>
        <p className="profile-p">Management System Certification:</p>
        <p className="profile-p">Main Markets:</p>
      </div>
      <div className="profile-title">
        <p className="profile-p">Manufacturer/Factory, Trading Company</p>
        <p className="profile-p">Products one, products two...</p>
        <p className="profile-p">100000 p</p>
        <p className="profile-p">2000 asdf</p>
        <p className="profile-p">Iso</p>
        <p className="profile-p">south america</p>
      </div>
    </div>
    <div className="profile-paragrhph">
      <p>
        JustCold Refrigeration Technology Co. Ltd founded in located in UK, We are a manufacturer

        engaged in the production of semi-hermetic refrigeration compressors, the assembly of

        various brands of compressors and the processing, design and maintenance of spare parts.
      </p>
    </div>
  </div>
);
export default Companyprofile;
