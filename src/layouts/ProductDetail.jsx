import React, { useEffect, useState } from "react";
import DetailContent from "../components/DetailContent";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getDetailProduct = async (id) => {
    try {
      const response = await fetch(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`
      );
      const product = await response.json();
      setProduct(product);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    getDetailProduct(id);
  }, [id]);

  return (
    <>
      {product ? (
        <div className="w-full">
          <DetailContent product={product} />
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default ProductDetail;
