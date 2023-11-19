import { Box, Flex, Heading, Spacer, Text, Image } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { Button } from "@components/common";

export default function Welcome() {
  return (
    <Box>
      <Box
        bg="bg.gray"
        px={{ base: "10px", md: "150px" }}
        pt={{ base: "40px", md: "65px" }}
        pb={{ base: "80px", md: "128px" }}
        borderRadius="35px"
        textAlign="center"
        mt={{ base: "40px", md: "82px" }}
      >
        <Heading
          fontSize={{ base: "22px", sm: "25px", lg: "53px" }}
          fontFamily="heading"
          fontWeight={900}
          lineHeight="100%"
          letterSpacing="-0.55px"
          color="black"
        >
          Продвигай
          <Image
            src="/assets/images/avito-text.png"
            alt="Avito"
            display="inline-block"
            mx={{ base: "15px", lg: "20px" }}
            w={{ base: "90px", lg: "200px" }}
          />
          —<br />Управляй объявлениями
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontFamily="heading"
          fontWeight={400}
          lineHeight="150%"
          py={{ base: "20px", md: "30px" }}
          color="black"
        >
          Используйте Google Таблицы для управления Avito аккаунтами.
          Добавляйте, клонируйте и редактируйте объявления в пару кликов.
        </Text>
        <Link to="/auth/login">
          <Button>Начните сейчас</Button>
        </Link>
      </Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        px={{ base: "0px", lg: "44px" }}
        mb={{ base: "10px", lg: "20px" }}
      >
        <Box
          bg="bg.purple"
          p={{ base: "10px", lg: "20px" }}
          borderRadius="35px"
          w={{ base: "100%", lg: "230px" }}
          textAlign="center"
          mt={{ base: "-50px", lg: "-100px" }}
        >
          <Flex
            justify="center"
            align="center"
            bg="bg.gray"
            py="20px"
            px="26px"
            borderRadius="35px">
            <Image src="/assets/images/google-sheets.png" alt="" />
          </Flex>
          <Heading
            color="white"
            fontFamily="Inter"
            fontSize="25px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="120%"
            py={4}
          >
            10.000+ объявлений
          </Heading>
          <Text
            color="white"
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="150%"
            pb={30}
          >
            Через Google Таблицы вы можете выкладывать и легко контролировать
            тысячи объявлений
          </Text>
        </Box>
        <Spacer />
        <Box
          w={{ base: "100%", lg: "600px" }}
          py={{ base: "27px", lg: "34px" }}
          px={{ base: "34px", lg: "49px" }}
          bg="bg.white"
          borderRadius="35px"
          boxShadow="0px 4px 64.8px 0px rgba(0, 0, 0, 0.15)"
          mt={{ base: "20px", lg: "-50px" }}
        >
          <Heading
            color="black"
            fontFamily="Inter"
            fontSize="25px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="120%"
            maxW="350px"
            textAlign={{ base: 'center', sm: 'unset' }}
          >
            Получайте больше заявок — используя Avito Plus
          </Heading>
          <Flex
            justify={{ base: "space-evenly", md: "space-between" }}
            flexWrap="wrap"
            gap="44px"
            mt="36px"
            position="relative">
            <Image
              src="/assets/images/arrow.png"
              alt="arrow"
              w="60px"
              h="60px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              left="-70px"
            />
            <Box>
              <Text
                color="blue.200"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Просмотры
              </Text>
              <Text
                color="blue.200"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                👀 783
              </Text>
              <Text color="black">
                <TriangleUpIcon color="green.200" boxSize="12px" mr="10px" />{" "}
                87.09%
              </Text>
            </Box>
            <Box>
              <Text
                color="blue.200"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Конверсия
              </Text>
              <Text
                color="blue.200"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                📊 23%
              </Text>
              <Text color="black">
                <TriangleUpIcon color="green.200" boxSize="12px" mr="10px" />{" "}
                65.31%
              </Text>
            </Box>
            <Box>
              <Text
                color="blue.200"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Сообщения
              </Text>
              <Text
                color="blue.200"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                💬 34
              </Text>
              <Text color="black">
                <TriangleUpIcon color="green.200" boxSize="12px" mr="10px" />{" "}
                79.48%
              </Text>
            </Box>
            <Box>
              <Text
                color="blue.200"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Избранное
              </Text>
              <Text
                color="blue.200"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                💜 45
              </Text>
              <Text color="black">
                <TriangleUpIcon color="green.200" boxSize="12px" mr="10px" />{" "}
                55.44%
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex >
    </Box >
  );
}
