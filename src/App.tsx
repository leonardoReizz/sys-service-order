import { ThemeProvider } from "styled-components"
import { ClientsContextProvider } from "./context/ClientsContext"
import { ProductsContextProvider } from "./context/ProductsContext"
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import {ServicesContextProvider} from "./context/ServiceContext";
import {ServiceOrderContextProvider} from "./context/ServiceOrderContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <ClientsContextProvider>
          <ServicesContextProvider>
            <ServiceOrderContextProvider>
              <AppRoutes />
            </ServiceOrderContextProvider>
          </ServicesContextProvider>
        </ClientsContextProvider>
      </ProductsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
