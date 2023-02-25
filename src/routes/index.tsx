import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "../context/ProductsContext";
import { Dashboard } from "../pages/Dashboard";
import { Products } from "../pages/Products";
import { LayoutWithSidebar } from "./LayoutWithSidebar";



export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithSidebar />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsContextProvider><Products /></ProductsContextProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}