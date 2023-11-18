import { Box, Flex , Heading, Image, Text } from "@chakra-ui/react";
import { Button } from "../../../components/common";

const PicturesWork = () => {
    return (
        <Flex
        gap="50px"
        py="35px"
        px="42"
        bg="#FAFAFA"
        borderRadius="35px"
        my="15px"
      >
        <Box>
          <Box
            w="67px"
            h="67px"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#805AD5"
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
          <Text fontSize="14px" my="18px">
            Загрузите фотографии по папкам, вставьте названия папок в таблицу,
            фотографии сами подгрузятся на Авито.
          </Text>
          <Button>Яндекс Диск</Button>
        </Box>
        <Box textAlign="center">
          <Image src="/assets/images/disk-folder.png" alt="" />
          <Text fontSize="14px" fontWeight="600">
            Avito Plus
          </Text>
        </Box>
        <Image src="/assets/images/image-folder.png" alt="" />
      </Flex>
    );
};

export default PicturesWork;