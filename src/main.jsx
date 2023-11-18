import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App.jsx'

// Font styles
import "@fontsource/inter";
import "@fontsource/inter/400.css";

const root = createRoot(document.getElementById('root'))

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
})

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
