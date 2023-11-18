import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AvitoPlus = () => {
  return (
    <Flex my="15px" gap="50px" alignItems="center">
      <Box bg="#FAFAFA" borderRadius="35px" p="40px" w="300px">
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Редактируйте <br /> Google Таблицу
        </Heading>
        <Text fontSize="14px" my="18px">
          Одна строка в таблице, равна одному объявлению
        </Text>
        <Image src="/assets/images/table.png" alt="" w='258px' h='179px' />
      </Box>
      <Box>
        <Heading
          fontSize="30px"
          fontStyle="normal"
          fontWeight={800}
          lineHeight="120%"
        >
          Как работает
          <Text color="#805AD5">— Avito Plus?</Text>
        </Heading>
        <Text
          display="flex"
          alignItems="center"
          textAlign="center"
          mt="40px"
          fontSize="20px"
          fontStyle="normal"
          fontWeight={700}
          lineHeight="120%"
        >
          Выгрузка на Авито <br /> раз в 60 минут{" "}
          <Image src="/assets/images/arrow.png" alt="" marginLeft="10px" />{" "}
        </Text>
      </Box>
      <Box bg="#FAFAFA" borderRadius="35px" p="40px" w="300px">
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Авито публикует объявления
        </Heading>
        <Text fontSize="14px" my="18px">
          Если в объявлении ошибка — мы отобразим ее в таблице рядом с
          объявлением
        </Text>
        <Image src="/assets/images/cloud.png" alt="" />
      </Box>
    </Flex>
  );
};

export default AvitoPlus;
