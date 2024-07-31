import React from "react";

const ProductUpdate = () => {
  return (
    <div>
      <h1 className="text-black font-semibold text-2xl mb-4">Update product</h1>
      <form>
        <div className="mb-3">
          <label className="block text-gray-500 font-medium">
            Product name
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="py-2 px-3 rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-500 font-medium">IMG</label>
          <input
            type="text"
            placeholder="Image"
            className="py-2 px-3 rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-500 font-medium">Price</label>
          <input
            type="text"
            placeholder="Price"
            className="py-2 px-3 rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-500 font-medium">Type</label>
          <input
            type="text"
            placeholder="Type"
            className="py-2 px-3 rounded-md"
          />
        </div>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductUpdate;
