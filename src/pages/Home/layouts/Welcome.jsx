import { Box, Flex, Heading, Spacer, Text, Image } from "@chakra-ui/react";
import { Button } from "../../../components/common";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Box>
      <Box
        bg="#FAFAFA"
        px={{ base: "20px", md: "150px" }}
        pt={{ base: "40px", md: "65px" }}
        pb={{ base: "80px", md: "128px" }}
        borderRadius="35px"
        textAlign="center"
        mt={{ base: "40px", md: "82px" }}
      >
        <Heading
          fontSize={{ base: "36px", md: "53px" }}
          fontFamily="heading"
          fontWeight={900}
          lineHeight="100%"
          letterSpacing="-0.55px"
        >
          Продвигай
          <img
            src="/assets/images/avito-text.png"
            alt=""
            style={{
              display: "inline-block",
              marginBottom: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              width: "200px",
            }}
          />
          — Управляй объявлениями
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontFamily="heading"
          fontWeight={400}
          lineHeight="150%"
          py={{ base: "20px", md: "30px" }}
        >
          Используйте Google Таблицы для управления Avito аккаунтами.
          Добавляйте, клонируйте и редактируйте объявления в пару кликов.
        </Text>
        <Link to="/auth/login">
          <Button>Начните сейчас</Button>
        </Link>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: "10px", md: "44px" }}
        mb={{ base: "10px", md: "20px" }}
      >
        <Box
          bg="#805AD5"
          p={{ base: "10px", md: "20px" }}
          borderRadius="35px"
          w={{ base: "100%", md: "230px" }}
          textAlign="center"
          mt={{ base: "-50px", md: "-100px" }}
        >
          <Box bg="#EFEFEF" py="20px" px="26px" borderRadius="35px">
            <Image src="/assets/images/google-sheets.png" alt="" />
          </Box>
          <Heading
            color="#FFF"
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
            color="#FFF"
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
          w={{ base: "100%", md: "600px" }}
          py={{ base: "20px", md: "34px" }}
          px={{ base: "10px", md: "49px" }}
          bg="#FFF"
          borderRadius="35px"
          boxShadow="0px 4px 64.8px 0px rgba(0, 0, 0, 0.15)"
          mt={{ base: "30px", md: "-50px" }}
        >
          <Heading
            color="#000"
            fontFamily="Inter"
            fontSize="25px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="120%"
            maxW={600}
          >
            Получайте больше заявок <br /> — используя Avito Plus
          </Heading>
          <Flex gap="44px" mt="36px" position="relative">
            <Image
              src="/assets/images/arrow.png"
              alt=""
              w="60px"
              h="60px"
              position="absolute"
              display={{ base: "none", md: "block" }}
              left="-70px"
            />
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Просмотры
              </Text>
              <Text
                color=" #2D3748"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                👀 783
              </Text>
              <Text>
                <TriangleUpIcon color="#48BB78" boxSize="12px" mr="10px" />{" "}
                87.09%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Конверсия
              </Text>
              <Text
                color=" #2D3748"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                📊 23%
              </Text>
              <Text>
                <TriangleUpIcon color="#48BB78" boxSize="12px" mr="10px" />{" "}
                65.31%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Сообщения
              </Text>
              <Text
                color=" #2D3748"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                💬 34
              </Text>
              <Text>
                <TriangleUpIcon color="#48BB78" boxSize="12px" mr="10px" />{" "}
                79.48%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px"
              >
                Избранное
              </Text>
              <Text
                color=" #2D3748"
                fontSize="24px"
                fontWeight={600}
                lineHeight="32px"
                my={1}
              >
                💜 45
              </Text>
              <Text>
                <TriangleUpIcon color="#48BB78" boxSize="12px" mr="10px" />{" "}
                55.44%
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
