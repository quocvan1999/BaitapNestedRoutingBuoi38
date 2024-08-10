import React from "react";
import { NavLink } from "react-router-dom";

const TableItem = ({ product, deleteProduct }) => {
  return (
    <tr className="text-center">
      <td>
        <input type="checkbox" className="accent-orange-400" />
      </td>
      <td>{product.name}</td>
      <td className="flex justify-center">
        <img src={product.img} alt="img" className="w-[50px]" />
      </td>
      <td>{product.price}$</td>
      <td>{product.type}</td>
      <td>
        <div className="text-orange-400 flex gap-3 w-full justify-center">
          <NavLink
            to={`/product-management/form-product/${product.id}?type=edit`}
          >
            Edit
          </NavLink>
          |
          <button
            onClick={() => {
              deleteProduct(product.id, product.name);
            }}
          >
            Delete
          </button>{" "}
          |
          <NavLink to={`/product-management/detail-product/${product.id}`}>
            View detail
          </NavLink>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
