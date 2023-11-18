import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container } from "../common";

export default function Footer() {
  return (
    <Flex bg="#FAFAFA" h="71px" justify="center" align="center" fontSize="14px">
      <Container>
        <Flex justify="space-between" align="center" gap="20px">
          <Text>@ 2023 Avito Plus - ИП Иванов Иван Иванович ИНН 7729773587</Text>
          <Flex justify="space-between" align="center" gap="20px">
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
    </Flex>
  )
}
