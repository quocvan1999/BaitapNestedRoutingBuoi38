import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchPrams, setSearchPrams] = useSearchParams();
  const type = searchPrams.get("type");

  const newProduct = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
      type: "",
      deleted: true,
    },
    validationSchema: yup.object().shape({
      id: yup.number("Id phải là số").required("Id không được bỏ trống"),
      name: yup
        .string("Tên sản phẩm phải là chuỗi")
        .required("Tên sản phẩm không được bỏ trống"),
      price: yup
        .number("Giá phải là số")
        .required("Giá sản phẩm không được bỏ trống"),
      img: yup
        .string("Link ảnh phải là chuỗi")
        .required("Link img không được bỏ trống"),
      description: yup
        .string("Description phải là chuỗi")
        .required("Description không được bỏ trống"),
      type: yup
        .string("Type phải là chuỗi")
        .required("Loại sản phẩm không được bỏ trống"),
    }),
    onSubmit: (value) => {
      if (type === "create") {
        addProduct(value);
      } else {
        updateProduct(value);
      }
    },
  });

  const updateProduct = async (updatedProduct) => {
    try {
      await fetch(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      navigate("/product-management");
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      await fetch(
        "https://apitraining.cybersoft.edu.vn/api/ProductApi/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );
      navigate("/product-management");
    } catch (error) {
      console.error(error);
    }
  };

  const getDetailProduct = async (id) => {
    try {
      const response = await fetch(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`
      );
      const product = await response.json();
      for (const key in product) {
        newProduct.setFieldValue(key, product[key]);
      }
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    if (type === "edit") {
      getDetailProduct(id);
    }
  }, [type, id]);

  return (
    <>
      {type && (
        <div>
          <h1 className="text-black font-semibold text-2xl mb-4">
            {type === "create" ? "Create product" : "Update product"}
          </h1>
          <form onSubmit={newProduct.handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-500 font-medium">
                Product id
              </label>
              <input
                type="text"
                placeholder="Product id"
                className="py-2 px-3 rounded-md focus:outline-none"
                name="id"
                onChange={newProduct.handleChange}
                value={newProduct.values.id}
                disabled={type === "edit"}
              />
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.id}
              </span>
            </div>
            <div className="mb-3">
              <label className="block text-gray-500 font-medium">
                Product name
              </label>
              <input
                type="text"
                placeholder="Product name"
                className="py-2 px-3 rounded-md focus:outline-none"
                name="name"
                onChange={newProduct.handleChange}
                value={newProduct.values.name}
              />
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.name}
              </span>
            </div>
            <div className="mb-3">
              <label className="block text-gray-500 font-medium">Price</label>
              <input
                type="text"
                placeholder="Price"
                className="py-2 px-3 rounded-md focus:outline-none"
                name="price"
                onChange={newProduct.handleChange}
                value={newProduct.values.price}
              />
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.price}
              </span>
            </div>
            <div className="mb-3">
              <label className="block text-gray-500 font-medium">IMG</label>
              <input
                type="text"
                placeholder="Image"
                className="py-2 px-3 rounded-md focus:outline-none"
                name="img"
                onChange={newProduct.handleChange}
                value={newProduct.values.img}
              />
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.img}
              </span>
            </div>

            <div className="mb-3">
              <label className="block text-gray-500 font-medium">Type</label>
              <input
                type="text"
                placeholder="Type"
                className="py-2 px-3 rounded-md focus:outline-none"
                name="type"
                onChange={newProduct.handleChange}
                value={newProduct.values.type}
              />
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.type}
              </span>
            </div>
            <div className="mb-3">
              <label className="block text-gray-500 font-medium">
                Description
              </label>
              <textarea
                name="description"
                className="focus:outline-none p-3"
                type="text"
                onChange={newProduct.handleChange}
                value={newProduct.values.description}
              ></textarea>
              <span className="text-red-600 text-[14px] block">
                {newProduct.errors.description}
              </span>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md"
            >
              {type === "create" ? "Create" : "Update"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductForm;
