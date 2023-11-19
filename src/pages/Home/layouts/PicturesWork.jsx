import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Button } from "@components/common";

const PicturesWork = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="50px"
      py="34px"
      px="40px"
      bg="bg.gray"
      borderRadius="35px"
      my="15px"
      alignItems='center'
    >
      <Box>
        <Box
          w="67px"
          h="67px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="bg.purple"
        >
          <Image src="/assets/images/img-icon.png" alt="" />
        </Box>
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Удобная работа с фото → Яндекс Диск
        </Heading>
        <Text color="black" fontSize="14px" my="18px">
          Загрузите фотографии по папкам, вставьте названия папок в таблицу,
          фотографии сами подгрузятся на Авито.
        </Text>
        <Link to="/cloud">
          <Button
            type="outline"
            w={{ base: "100%", sm: "239px" }}
          >
            Яндекс Диск</Button>
        </Link>
      </Box>
      <Box textAlign="center">
        <Image
          src="/assets/images/disk-folder.png"
          minW="100px"
          minH="90px"
          alt="folder" />
        <Text color="black" fontSize="14px" fontWeight="600">
          Avito Plus
        </Text>
      </Box>
      <Image src="/assets/images/image-folder.png" alt="folder" />
    </Flex >
  );
};

export default PicturesWork;