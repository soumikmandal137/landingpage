import { CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import Routes from "./routes/Route"
import Theme from "./Theme/Theme"
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client =new QueryClient()
  
  return (
    <>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
       <Toaster position="top-right"/>
      <QueryClientProvider client={client}>
      <RouterProvider router={Routes}/>
      </QueryClientProvider>
    </ThemeProvider>

    </>
  )
}

export default App
