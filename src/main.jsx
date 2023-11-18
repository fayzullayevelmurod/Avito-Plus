import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// Entry
import theme from './theme/index.js';
import App from './App.jsx'

// Font styles
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

const root = createRoot(document.getElementById('root'))

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
