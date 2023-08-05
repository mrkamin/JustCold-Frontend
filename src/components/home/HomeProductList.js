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
          <h6>{product.title}</h6>
          <p>
            FOB Price:
            {product.price}
            $/ Piece
          </p>
          <button type="button" className="productlist-btn">Contact Now</button>
        </div>
      </div>
    ))}
  </div>
);

export default HomeProductList;
