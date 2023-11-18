import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Container, Button } from '../common'

export default function Navbar() {
  return (
    <Container>
      <Flex
        w="100%"
        h="60px"
        py="13px"
        gap="10px"
        align="center"
        justify="space-between">
        <Link to='/'>
          <Image src='/assets/svg/logo.svg' alt='Logo' />
        </Link>
        <Link to="/auth/login">
          <Button px={{ base: '8px', sm: '12px' }}>
            <Text
              fontSize={{ base: '12px', sm: '14px' }}
              fontWeight="600"
              lineHeight="20px">Вход / Регистрация</Text>
          </Button>
        </Link>
      </Flex>
    </Container >
  )
}
