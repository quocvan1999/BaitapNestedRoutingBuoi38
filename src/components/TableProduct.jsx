import React from "react";
import TableItem from "./TableItem";

const TableProduct = () => {
  return (
    <div className="bg-white p-3 rounded-md mt-3">
      <table class="table-auto w-full">
        <thead>
          <tr className="text-gray-500">
            <th className="font-medium">
              <input type="checkbox" class="accent-orange-400" />
            </th>
            <th className="font-medium">NAME</th>
            <th className="font-medium">IMG</th>
            <th className="font-medium">PRICE</th>
            <th className="font-medium">TYPE</th>
            <th className="font-medium">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
      <div className="w-full flex justify-between mt-3 font-normal">
        <div>Showing 1 to 3 of 3 resultfs</div>
        <div className="flex items-center">
          Per page:
          <select className="border cursor-pointer focus:outline-none rounded-md ms-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
