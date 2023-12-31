import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

import { Button } from '@components/common'
import { Link } from 'react-router-dom'

export default function AvitoInfo() {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify="space-between"
      align="center"
      gap="37px"
      py="20px"
    >
      <Flex
        direction="column"
        borderRadius="35px"
        maxW={{ base: '640px', lg: "323px" }}
        h="611px"
        bg="bg.gray"
        py="32px"
        px="38px"
      >
        <Flex
          align="center"
          justify="center"
          bg="purple"
          w="67px"
          h="67px"
          borderRadius="50%"
        >
          <CopyIcon color="white" boxSize={6} />
        </Flex>
        <Heading mt="26px" mb="10px" fontSize="22px" fontWeight="700" color="black">
          Сделайте из 100 шт <br />-&gt; 1000 шт
        </Heading>
        <Text color="black" fontSize="14px">
          Используйте встроенную функцию рандомизатора, что бы создать уникальные копии объявлений
        </Text>
        <Box mx="auto" minW="220px" h="220px" mt="35px" mb="30px" position="relative">
          <Image
            src="/assets/images/screenshot.png"
            alt="Screenshot"
            position="absolute"
            left="0"
            bottom="0"
            zIndex="3"
          />
          <Image
            src="/assets/images/screenshot.png"
            alt="Screenshot"
            position="absolute"
            left="26px"
            zIndex="2"
            bottom="11px" />
          <Image
            src="/assets/images/screenshot.png"
            alt="Screenshot"
            position="absolute"
            left="50px"
            bottom="25px" />
        </Box>
        <Link to="/randomizer">
          <Button type="outline" w="100%" >
            <Text>Рандомизатор</Text>
          </Button>
        </Link>
      </Flex>

      <Flex
        direction="column"
        borderRadius="35px"
        maxW="640px"
        minH="611px"
        bg="bg.gray"
        py="32px"
        px="38px"
      >
        <Flex
          align="center"
          justify="center"
          bg="bg.purple"
          w="67px"
          h="67px"
          borderRadius="50%"
        >
          <Image src="/assets/svg/block-collage.svg" alt="Collage" />
        </Flex>
        <Heading
          mt="26px"
          mb="10px"
          fontSize="22px"
          fontWeight="700"
          color="black"
        >
          Больше объявлений — больше заявок! <br />
          Публикуй объявления как PRO
        </Heading>
        <Text color="black" fontSize="14px">
          Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — <br />
          Это все не покидая таблицы.
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          mt="45px"
          mb="53px"
          align="center"
          justify="space-between"
          gap={{ base: '20px', lg: 'unset' }}
        >
          <Image src="/assets/images/user-art.png" alt="user-art" />
          <Flex direction="column" align="flex-end" gap="12px">
            <Box
              maxW="300px"
              py="10px"
              px="20px"
              bg="bg.purple"
              borderRadius="93px"
              position="relative"
            >
              <Text color="white" fontSize={{ base: '12px', sm: "16px" }} fontWeight="600">
                📍 Постинг по адресам и метро
              </Text>
              <Image
                src="/assets/svg/vector-sms.svg"
                alt="vector"
                position="absolute"
                right="-10px"
                bottom="-9px"
              />
            </Box>

            <Box
              maxW="260px"
              py="10px"
              px="20px"
              bg="#805AD5"
              borderRadius="93px"
              position="relative"
            >
              <Text color="white" fontSize={{ base: '12px', sm: "16px" }} fontWeight="600">
                📊 Статистика объявлений
              </Text>
              <Image
                src="/assets/svg/vector-sms.svg"
                alt="vector"
                position="absolute"
                right="-10px"
                bottom="-9px"
              />
            </Box>

            <Box
              maxW="243px"
              py="10px"
              px="20px"
              bg="#805AD5"
              borderRadius="93px"
              position="relative"
            >
              <Text color="white" fontSize={{ base: '12px', sm: "16px" }} fontWeight="600">
                📝 Учет остатков товара
              </Text>
              <Image
                src="/assets/svg/vector-sms.svg"
                alt="vector"
                position="absolute"
                right="-10px"
                bottom="-9px"
              />
            </Box>
          </Flex>
        </Flex>
        <Link to="/about">
          <Button type="outline" w="100%" >
            <Text>База знаний Avito Plus</Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
