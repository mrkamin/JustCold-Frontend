import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../data'; // Make sure to import your data source

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from URL parameter

  // Find the product with the matching ID from your data source
  const product = Products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <img src={product.photo} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        Price: $
        {product.price.toFixed(2)}
      </p>
      <p>
        Type:
        {product.type}
      </p>
      <p>
        Certification:
        {product.Certification}
      </p>
      <p>
        Fans Species:
        {product.FansSpecies}
      </p>
      <p>
        Application Fields:
        {product.ApplicationFields}
      </p>
      <p>
        Condition:
        {product.Condition}
      </p>
      <p>
        Customization:
        {product.Customization}
      </p>
    </div>
  );
};

export default ProductDetail;
