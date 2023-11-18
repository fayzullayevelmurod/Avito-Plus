import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/react'

export default function Button(props) {
  return (
    <ChakraButton
      border="1px"
      borderColor="@805AD5"
      borderRadius="6px"
      transition="0.3s"
      bg="#805AD5"
      color="white"
      _hover={{
        background: "white",
        color: "black",
        border: "1px solid #805AD5"
      }}
      {...props}
    >
      {props.children}
    </ChakraButton>
  )
}

Button.propTypes = {
  children: PropTypes.any
}