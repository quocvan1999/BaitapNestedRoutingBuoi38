import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TableProduct from "../components/TableProduct";

const ProductManage = () => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getAllProduct = async () => {
    try {
      const response = await fetch(
        "https://apitraining.cybersoft.edu.vn/api/ProductApi/getall"
      );
      const data = await response.json();
      setProductsFilter(data);
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteProduct = async (id, productName) => {
    try {
      await fetch(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      alert(`Xoá thành công sản phẩm ${productName}`);
      setIsloading(!isLoading);
    } catch (e) {
      alert(`Xoá không thành công sản phẩm ${productName}`);
      console.error(e);
    }
  };

  const handleSearchedProduct = (value) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProductsFilter(filtered);
  };

  useEffect(() => {
    getAllProduct();
  }, [isLoading]);

  return (
    <div>
      <p>{`Product>List`}</p>
      <NavLink
        to="/product-management/form-product/0?type=create"
        className="text-white bg-orange-500 py-2 px-3 rounded-md inline-block"
      >
        New product
      </NavLink>
      <form className="mt-2">
        <input
          type="text"
          placeholder="Search products..."
          className="py-2 px-3 rounded-l-md"
          onChange={(e) => handleSearchedProduct(e.target.value)}
        />
        <button
          type="button"
          className="text-white font-medium bg-orange-500 px-3 py-2 rounded-r-md"
        >
          Search
        </button>
      </form>
      <div>
        {productsFilter && (
          <TableProduct
            products={productsFilter}
            deleteProduct={deleteProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductManage;
