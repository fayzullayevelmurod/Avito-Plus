import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Container, Button } from "../../../components/common";
import { TriangleUpIcon } from "@chakra-ui/icons";

export default function Welcome() {
  return (
    <Container>
      <Box
        bg="#FAFAFA"
        px="150px"
        pt="65px"
        pb="128px"
        borderRadius="35px"
        textAlign="center"
        mt="82px"
      >
        <Heading
          fontSize="53px"
          fontFamily="heading"
          fontStyle="normal"
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
          fontSize="16px"
          fontFamily="heading"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="150%"
          py="30px"
        >
          Используйте Google Таблицы для управления Avito аккаунтами.
          Добавляйте, клонируйте и редактируйте объявления в пару кликов.
        </Text>
        <Button>Начните сейчас</Button>
      </Box>
      <Flex px="44px" mb={20} >
        <Box
          bg="#805AD5;"
          p="20px"
          borderRadius="35px"
          w="230px"
          textAlign="center"
          mt="-100px"
        >
          <Box bg="#EFEFEF" py="20px" px="26px" borderRadius="35px">
            <img src="/assets/images/google_sheets.png" alt="" />
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
          w="600px"
          p={50}
          bg="#FFF"
          borderRadius="35px"
          boxShadow="0px 4px 64.8px 0px rgba(0, 0, 0, 0.15)"
          mt="-50px"
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
          <Flex gap="44px" mt="36px">
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={500}
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
                <TriangleUpIcon color='#48BB78' boxSize="12px" mr='10px' /> 87.09%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={500}
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
                <TriangleUpIcon color='#48BB78' boxSize="12px" mr='10px' /> 65.31%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={500}
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
                <TriangleUpIcon color='#48BB78' boxSize="12px" mr='10px' /> 79.48%
              </Text>
            </Box>
            <Box>
              <Text
                color="#2D3748"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={500}
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
                <TriangleUpIcon color='#48BB78' boxSize="12px" mr='10px' /> 55.44%
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
