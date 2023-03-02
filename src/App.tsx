import { ThemeProvider } from "styled-components"
import { ClientsContextProvider } from "./context/ClientsContext"
import { ProductsContextProvider } from "./context/ProductsContext"
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <ClientsContextProvider>
          <AppRoutes />
        </ClientsContextProvider>
      </ProductsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
