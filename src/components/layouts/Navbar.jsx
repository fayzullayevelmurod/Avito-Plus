import { Flex, Image, Link, Text } from "@chakra-ui/react";

import Button from '../common/Button'
import Container from '../common/Container'

export default function Navbar() {
  return (
    <Container>
      <Flex w="100%" h="60px" py="13px" align="center" justify="space-between">
        <Link href='/'>
          <Image src='/assets/images/logo.png' alt='Logo' />
        </Link>
        <Button>
          <Text fontSize='14px'>Вход / Регистрация</Text>
        </Button>
      </Flex>
    </Container>
  )
}
