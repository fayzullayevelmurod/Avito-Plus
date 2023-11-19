import { Flex, Heading } from "@chakra-ui/react";
import { Button, Container } from "../components/common";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container>
      <Flex
        mt="150px"
        justify="center"
        align="center"
        direction="column"
        gap="10px"
      >
        <Heading textAlign="center"
        >Ошибка 404 <br /> Страница не найдена.
        </Heading>

        <Link to="/">
          <Button>Домой</Button>
        </Link>
      </Flex>
    </Container >
  )
}
