import { ThemeProvider } from "styled-components"
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
