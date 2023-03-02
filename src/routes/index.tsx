import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientsContextProvider } from "../context/ClientsContext";
import { ProductsContextProvider } from "../context/ProductsContext";
import { Clients } from "../pages/Clients";
import { Dashboard } from "../pages/Dashboard";
import { Products } from "../pages/Products";
import { ServiceOrder } from "../pages/ServiceOrder";
import { LayoutWithSidebar } from "./LayoutWithSidebar";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithSidebar />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/serviceOrder" element={<ServiceOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}