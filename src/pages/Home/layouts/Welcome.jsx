import { Box, Heading, Text } from "@chakra-ui/react";
import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container";

export default function Welcome() {
  return (
    <Container>
      <Box
        bg="#FAFAFA"
        px="150px"
        py="65px"
        borderRadius="35px"
        textAlign="center"
        my="46px"
      >
        <Heading fontSize="55px">
          Продвигай{" "}
          <img
            src="/assets/images/avito (1) 1.png"
            alt=""
            style={{ display: "inline-block" }}
          />{" "}
          — Управляй объявлениями
        </Heading>
        <Text fontSize="16px">
          Используйте Google Таблицы для управления Avito аккаунтами.
          Добавляйте, клонируйте и редактируйте объявления в пару кликов.
        </Text>
        <Button>Начните сейчас</Button>
      </Box>
    </Container>
  );
}