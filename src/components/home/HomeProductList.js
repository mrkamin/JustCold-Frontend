import React from 'react';
import Products from '../../data';
import '../css/home.css';

const HomeProductList = () => (
  <div className="productslist-container">
    {Products.map((product) => (
      <div className="productslist-info" key={product.id}>
        <img
          className="productlist-photo"
          src={product.photo}
          alt="productphoto"
        />
        <div className="productlist-title">
          <h2>{product.title}</h2>
          <p>
            {product.price}
            $
          </p>
          <button type="button">Contact</button>
        </div>
      </div>
    ))}
  </div>
);

export default HomeProductList;
