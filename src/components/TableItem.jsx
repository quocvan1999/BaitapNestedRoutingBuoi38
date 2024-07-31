import React from "react";
import { NavLink } from "react-router-dom";

const TableItem = () => {
  return (
    <tr className="text-center">
      <td>
        <input type="checkbox" class="accent-orange-400" />
      </td>
      <td>Product 1</td>
      <td className="flex justify-center">
        <img
          src="https://www.keycdn.com/img/blog/image-cdn.png"
          alt="img"
          className="w-[100px]"
        />
      </td>
      <td>200</td>
      <td>A</td>
      <td>
        <div className="text-orange-400 flex gap-3 w-full justify-center">
          <NavLink>Edit</NavLink> |<NavLink>Delete</NavLink> |
          <NavLink>View detail</NavLink>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
