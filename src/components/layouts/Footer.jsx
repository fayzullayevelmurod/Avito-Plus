import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Container } from "@components/common";

export default function Footer() {
  return (
    <Flex
      bg="#FAFAFA"
      minH="71px"
      justify="center"
      align="center"
      fontSize="14px" >
      <Container>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'center', lg: 'space-between' }}
          align="center"
          color="black"
          py={{ base: '20px', lg: 'unset' }}
          gap={{ base: '10px', lg: '20px' }}>

          <Text textAlign="center">@ 2023 Avito Plus - ИП Иванов Иван Иванович ИНН 7729773587</Text>

          <Flex
            justify="space-between"
            align="center"
            gap={{ base: '10px', lg: '20px' }}
            direction={{ base: 'column', lg: 'row' }}>

            <Link to="/privacy-policy">
              <Text _hover={{ textDecoration: "underline" }}>
                Политика конфиденциальности
              </Text>
            </Link>

            <Link to="/oferta">
              <Text _hover={{ textDecoration: "underline" }}>
                Оферта
              </Text>
            </Link>

          </Flex>
        </Flex>
      </Container>
    </Flex >
  )
}
