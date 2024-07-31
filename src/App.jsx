import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductCreate from "./layouts/ProductCreate";
import ProductManage from "./layouts/ProductManage";
import ProductUpdate from "./layouts/ProductUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product-management" element={<HomePage />}>
          <Route index element={<ProductManage />} />
          <Route path="create-product" element={<ProductCreate />} />
          <Route path="update-product">
            <Route path=":id" element={<ProductUpdate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
