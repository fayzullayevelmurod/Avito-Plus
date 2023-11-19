import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
  colors: {
    purple: "#805AD5",
    gray: "#FAFAFA",
    black: 'black',
    white: 'white',
    blue: {
      200: "#2D3748"
    },
    green: {
      200: "#48BB78"
    },
    bg: {
      purple: "#805AD5",
      white: 'white',
      gray: '#FAFAFA'
    }
  }
})

export default theme