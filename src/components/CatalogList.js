import React from "react";
import CatalogCard from "./CatalogCard";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jeans",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Jacket",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
];

const CatalogList = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap">
        {products.map((product) => (
          <CatalogCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogList;
