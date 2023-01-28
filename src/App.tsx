import React from 'react'
import HomePage from './pages/homePage/HomePage'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
