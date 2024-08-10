import React from "react";

const DetailContent = ({ product }) => {
  return (
    <div className="w-full flex gap-3">
      <div className="w-[30%]">
        <img src={product && product.img} alt="" />
      </div>
      <div className="w-[70%]">
        <h1 className="font-bold text-3xl">{product && product.name}</h1>
        <p className="mt-3">Price: ${product && product.price}</p>
        <p>{product && product.description}</p>
      </div>
    </div>
  );
};

export default DetailContent;
