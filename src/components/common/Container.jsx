import PropTypes from 'prop-types'
import { Container as Wrapper } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Wrapper maxW="1000px">
      {children}
    </Wrapper>
  )
}

Container.propTypes = {
  children: PropTypes.any
}