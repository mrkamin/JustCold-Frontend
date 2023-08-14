import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Companyprofile from '../shared/Companyprofile';
import { Products } from '../../data';
import '../css/home.css';
import Contactform from '../shared/Contactform';

const HomeProductList = () => (
  <div>
    <div className="productslist-container">
      {Products.map((product) => (

        <div className="productslist-info" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              className="productlist-photo"
              src={product.image.img1}
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
    <Companyprofile />
    <Contactform />

  </div>
);

export default HomeProductList;
