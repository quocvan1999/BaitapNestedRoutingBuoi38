import React from "react";

import TableProduct from "../components/TableProduct";

const ProductManage = () => {
  return (
    <div>
      <p>{`Product>List`}</p>
      <button className="text-white bg-orange-500 py-2 px-3 rounded-md">
        New product
      </button>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Search products..."
          className="py-2 px-3 rounded-l-md"
        />
        <button className="text-white font-medium bg-orange-500 px-3 py-2 rounded-r-md">
          Search
        </button>
      </div>
      <div>
        <TableProduct />
      </div>
    </div>
  );
};

export default ProductManage;
