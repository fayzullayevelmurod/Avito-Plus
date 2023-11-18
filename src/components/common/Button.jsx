import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/react'

export default function Button(props) {
  if (props?.type === 'outline') {
    return (
      <ChakraButton
        border="1px"
        borderColor="#805AD5"
        borderRadius="6px"
        transition="0.4s"
        bg="#FAFAFA"
        color="#805AD5"
        _hover={{
          background: "#805AD5",
          color: "white",
          border: "1px solid #805AD5"
        }}
        {...props}
      >
        {props.children}
      </ChakraButton>
    )
  } else {
    return (
      <ChakraButton
        border="1px"
        borderColor="@805AD5"
        borderRadius="6px"
        transition="0.4s"
        bg="#805AD5"
        color="white"
        _hover={{
          background: "#FAFAFA",
          color: "#805AD5",
          border: "1px solid #805AD5"
        }}
        {...props}
      >
        {props.children}
      </ChakraButton>
    )
  }
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}