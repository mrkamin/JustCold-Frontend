import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Products from '../../data';
import '../css/home.css';

const HomeProductList = () => {
  const [activeNav, setActiveNav] = useState('/');

  return (

    <div className="productslist-container">
      {Products.map((product) => (

        <div className="productslist-info" key={product.id}>
          <Link to="/productdetails" onClick={() => setActiveNav('productdetails')} className={activeNav === 'productdetails' ? 'active' : ''}>
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

            </div>
          </Link>
          <button type="button" className="productlist-btn">Contact Now</button>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default HomeProductList;
