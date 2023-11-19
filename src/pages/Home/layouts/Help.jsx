import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Button } from "@components/common";

const Help = () => {
  return (
    <Flex justify="center" align="center" direction={{ base: "column", lg: "row" }} my="50px" gap="28px">
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={{ base: "center", sm: "flex-start" }}
        maxW="486px"
        gap="18px"
        py={{ base: "20px", sm: "10px" }}
        px="16px"
        bg="#FAFAFA"
        borderRadius="35px">
        <Box pt="30px">
          <Heading fontSize="22px" fontWeight="700" color="black">
            Поддержка
          </Heading>
          <Text fontSize="14px" my="18px">
            Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
          </Text>
        </Box>
        <Image w="213px" src="/assets/images/profile.png" alt="profile-imgage" />
      </Flex>
      <Flex
        direction={{ base: "column", sm: "row" }}
        maxW="488px"
        align={{ base: "center", sm: "flex-start" }}
        gap="50px"
        py="10px"
        px="16px"
        bg="#FAFAFA" borderRadius="35px">
        <Box pt="30px">
          <Heading fontSize="22px" fontWeight="700" color="black">
            Попробуй — Бесплатно
          </Heading>
          <Text fontSize="14px" my="18px">
            Создайте свой первый аккаунт и вы получите 7 дней бесплатного
            доступа к сервису.
          </Text>
          <Link to="/subscriptions">
            <Button w={{ base: "100%", sm: "unset" }} bg="#805AD5" color="white">
              Начать сейчас
            </Button>
          </Link>
        </Box>
        <Image w="209px" src="/assets/images/hobby.png" alt="plans" />
      </Flex>
    </Flex>
  );
};

export default Help;
