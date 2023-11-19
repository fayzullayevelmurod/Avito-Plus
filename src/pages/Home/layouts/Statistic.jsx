import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Statistic = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="20px"
      py="35px"
      px="42"
      bg="bg.gray"
      borderRadius="35px"
      my="15px"
      alignItems='center'
    >
      <Box
        minW="67px"
        minH="67px"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="bg.purple"
      >
        <Image src="/assets/images/chart.png" alt="chart" />
      </Box>

      <Box maxW="520px">
        <Heading
          textAlign={{ base: "center", md: "unset" }}
          fontSize="22px"
          fontWeight="700"
          color="black">
          Статистика Авито{" "}
        </Heading>
        <Text color="black" textAlign={{ base: "center", md: "unset" }} fontSize="14px" my="18px">
          Отслеживайте статистику по объявлениями и Авито аккаунтам.
          Анализируйте и принимайте решения на основе просмотров, конверсий,
          лайков и сообщений.
        </Text>
      </Box>
      <Image src="/assets/images/statistic.png" alt="" w="190px" h="100px" />
    </Flex>
  );
};

export default Statistic;
