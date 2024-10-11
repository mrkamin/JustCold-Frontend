import React, { useState } from 'react';
import Companyprofile from './shared/Companyprofile';
import Sidebar from './shared/Sidebar';
import { ServicesData } from '../data';
import Contactform from './shared/Contactform';
import './css/services.css';

const Services = () => {
  const [hoveredImages, setHoveredImages] = useState(
    ServicesData.map(() => ServicesData[0].img1),
  );

  const handleImageHover = (index, imageUrl) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = imageUrl;
    setHoveredImages(newHoveredImages);
  };
  return (
    <div>
      <div className="serviceslist-container flex">
        <h2>JustCould offers below Services</h2>
        <div className="serv-grid-page">
          <Sidebar />
          <div className="serviceslist-info flex">
            {ServicesData.map((service, index) => (
              <div className="serviceslist-info flex" key={service.id}>
                <div className="services-items">
                  <div className="services-img">
                    <div className="service-main-img">
                      <img src={hoveredImages[index]} alt={service.title} />
                    </div>
                    <div className="services-grid-images">
                      <img
                        src={service.img1}
                        alt={service.title}
                        onMouseEnter={() => handleImageHover(index, service.img1)}
                      />
                      <img
                        src={service.img2}
                        alt={service.title}
                        onMouseEnter={() => handleImageHover(index, service.img2)}
                      />
                      <img
                        src={service.img3}
                        alt={service.title}
                        onMouseEnter={() => handleImageHover(index, service.img3)}
                      />
                    </div>
                  </div>
                  <div className="serviceslist-title flex">
                    <h3>{service.title}</h3>
                    <div className="services-bulletpoints">
                      <p>{service.serviceone}</p>
                      <p>{service.servicetwo}</p>
                      <p>{service.servicethree}</p>
                    </div>
                    <button type="button" className="serviceslist-btn">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Companyprofile />
      <Contactform />
    </div>
  );
};

export default Services;
