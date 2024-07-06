import React from "react";

const CatalogCard = ({ product }) => {
  return (
    <div className="h-32 w-60 rounded-xl drop-shadow-2xl mr-8 bg-white border border-gray-200">
      <div className="h-60">
        <img
          className="h-full w-full rounded-t-xl"
          src={product.image}
          alt="image of product"
        />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center bg-white rounded-b-xl border border-gray-200">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default CatalogCard;
