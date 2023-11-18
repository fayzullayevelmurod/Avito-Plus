import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from './App.jsx'

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
