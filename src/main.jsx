import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App.jsx'

// Font styles
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

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
