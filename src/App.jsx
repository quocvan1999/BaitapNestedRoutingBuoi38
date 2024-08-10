import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductForm from "./layouts/ProductForm";
import ProductManage from "./layouts/ProductManage";
import ProductDetail from "./layouts/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product-management" element={<HomePage />}>
          <Route index element={<ProductManage />} />
          <Route path="form-product">
            <Route path=":id" element={<ProductForm />} />
          </Route>
          <Route path="detail-product">
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
