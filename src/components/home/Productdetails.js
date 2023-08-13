import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../data'; // Make sure to import your data source

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from URL parameter

  // Find the product with the matching ID from your data source
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
        <div className="product-details-chat">
          <h6>chat with</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
