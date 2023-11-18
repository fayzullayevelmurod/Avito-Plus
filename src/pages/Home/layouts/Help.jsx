import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Button } from "../../../components/common";

const Help = () => {
  return (
    <Flex my="50px" gap="28px">
      <Flex gap="18px" py="10px" px="16px" bg="#FAFAFA" borderRadius="35px">
        <Box pt="30px">
          <Heading fontSize="22px" fontWeight="700" color="black">
            Поддержка
          </Heading>
          <Text fontSize="14px" my="18px">
            Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
          </Text>
        </Box>
        <Image src="/assets/images/profile.png" alt="" />
      </Flex>
      <Flex gap="50px" py="10px" px="16px" bg="#FAFAFA" borderRadius="35px">
        <Box pt="30px">
          <Heading fontSize="22px" fontWeight="700" color="black">
            Попробуй — <br />
            Бесплатно
          </Heading>
          <Text fontSize="14px" my="18px">
            Создайте свой первый аккаунт и вы получите 7 дней бесплатного
            доступа к сервису.
          </Text>
          <Button bg="#805AD5" color="white" _active="red">
            Начать сейчас
          </Button>
        </Box>
        <Image src="/assets/images/hobby.png" alt="" />
      </Flex>
    </Flex>
  );
};

export default Help;
