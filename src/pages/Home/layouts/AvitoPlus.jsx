import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AvitoPlus = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      py={{ base: "30px", md: "unset" }}
      my="15px"
      gap="50px"
      alignItems="center">
      <Box
        bg="bg.gray"
        borderRadius="35px"
        py={{ base: "20px", lg: "40px" }}
        px="40px"
        w="300px"
        minH="410px"
        maxH="410px">
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Редактируйте <br /> Google Таблицу
        </Heading>
        <Text color="black" fontSize="14px" my="18px">
          Одна строка в таблице, равна одному объявлению
        </Text>
        <Box maxW="258px">
          <Image
            src="/assets/images/table.png"
            alt="table"
            objectFit="contain"
            h='179px' />
        </Box>
      </Box>
      <Box>
        <Heading
          fontSize="30px"
          fontStyle="normal"
          fontWeight={800}
          lineHeight="120%"
          color="black"
        >
          Как работает
          <Text color="purple">— Avito Plus?</Text>
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
          color="black"
          ml={{ base: '10px', md: 'unset' }}
        >
          Выгрузка на Авито <br /> раз в 60 минут{" "}
          <Image
            display={{ base: "none", md: 'unset' }}
            src="/assets/images/arrow.png"
            alt="arrow"
            marginLeft="10px" />{" "}
        </Text>
      </Box>
      <Box
        bg="bg.gray"
        borderRadius="35px"
        py={{ base: "20px", lg: "40px" }}
        px="40px"
        w="300px"
        minH="410px"
        maxH="410px">
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Авито публикует объявления
        </Heading>
        <Text color="black" fontSize="14px" my="18px">
          Если в объявлении ошибка — мы отобразим ее в таблице рядом с
          объявлением
        </Text>
        <Flex align="center" justify="center" maxW="258px">
          <Image
            src="/assets/images/cloud.png"
            alt="table"
            objectFit="contain"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default AvitoPlus;
