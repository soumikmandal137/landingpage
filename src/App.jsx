import { CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import Routes from "./routes/Route"
import Theme from "./Theme/Theme"

function App() {

  return (
    <>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <RouterProvider router={Routes}/>
    </ThemeProvider>

    </>
  )
}

export default App
