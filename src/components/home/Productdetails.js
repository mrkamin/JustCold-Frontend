import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../data';
import Companyprofile from '../shared/Companyprofile';
import Contactform from '../shared/Contactform';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = Products.find((product) => product.id === Number(productId));
  const [hoveredImage, setHoveredImage] = useState(product.image.img1);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleImageHover = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-details-img">
          <div className="details-main-img">
            <img src={hoveredImage} alt={product.title} />
          </div>
          <div className="grid-images">
            <img
              src={product.image.img1}
              alt={product.title}
              onMouseEnter={() => handleImageHover(product.image.img1)}
            />
            <img
              src={product.image.img2}
              alt={product.title}
              onMouseEnter={() => handleImageHover(product.image.img2)}
            />
            <img
              src={product.image.img3}
              alt={product.title}
              onMouseEnter={() => handleImageHover(product.image.img3)}
            />
            <img
              src={product.image.img4}
              alt={product.title}
              onMouseEnter={() => handleImageHover(product.image.img4)}
            />
            <img
              src={product.image.img5}
              alt={product.title}
              onMouseEnter={() => handleImageHover(product.image.img5)}
            />
          </div>
        </div>
        <div className="product-details-details flex">
          <h2>{product.title}</h2>
          <div className="space">
            <p className="child-one">Price:</p>
            <p>
              {' '}
              $
              {product.price.toFixed(2)}
            </p>
          </div>
          <div className="space">
            <p className="child-one">Type:</p>
            <p>{product.type}</p>
          </div>
          <div className="space">
            <p className="child-one">Certification:</p>
            <p>{product.Certification}</p>
          </div>
          <div className="space">
            <p className="child-one">Fans Species:</p>
            <p>{product.FansSpecies}</p>
          </div>
          <div className="space">
            <p className="child-one">Application Fields:</p>
            <p>{product.ApplicationFields}</p>
          </div>
          <div className="space">
            <p className="child-one">Condition:</p>
            <p>{product.Condition}</p>
          </div>
          <div className="space">
            <p className="child-one">Customization:</p>
            <p>{product.Customization}</p>
          </div>
        </div>
      </div>
      <Companyprofile />
      <Contactform />
    </div>
  );
};

export default ProductDetail;
