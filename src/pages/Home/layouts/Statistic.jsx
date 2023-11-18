import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Statistic = () => {
  return (
    <Flex
      gap="20px"
      py="35px"
      px="42"
      bg="#FAFAFA"
      borderRadius="35px"
      my="15px"
      alignItems='center'
    >
      <Box
        w="67px"
        h="67px"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#805AD5"
      >
        <Image src="/assets/images/chart.png" alt="" />
      </Box>

      <Box maxW="520px">
        <Heading fontSize="22px" fontWeight="700" color="black">
          Статистика Авито{" "}
        </Heading>
        <Text fontSize="14px" my="18px">
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
