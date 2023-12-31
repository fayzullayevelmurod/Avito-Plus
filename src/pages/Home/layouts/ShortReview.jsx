import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Button } from '@components/common'

export default function ShortReview() {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      justify={{ base: 'center', md: 'space-between' }}
      align="center"
      py="50px"
      gap="50px"
    >
      <Box maxW="343px">
        <Heading
          color="black"
          lineHeight="120%"
          fontWeight="900"
          textAlign={{ base: 'center', md: 'unset' }}
        >
          Краткий обзор <br /><Box as="span" color="purple">— 120 секунд</Box>
        </Heading>
        <Text
          color="black"
          textAlign={{ base: 'center', md: 'unset' }}
          fontSize="14px"
          my="17px"
        >
          Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — <br />
          Это все не покидая таблицы.
        </Text>
        <Flex
          gap={{ base: "10px", md: "30px" }}
          flexWrap="wrap"
          justify={{ base: 'center', md: 'flex-start' }}
        >
          <Link to="/auth/login">
            <Button px="16px" borderRadius="39px">Начать сейчас</Button>
          </Link>
          <Link to="/futures">
            <Button px="16px" borderRadius="39px" bg="#EDF2F7" color="black" borderColor="white">Возможности</Button>
          </Link>
        </Flex>
      </Box>
      <Box
        bgImage={{ base: 'unset', md: "url('/assets/svg/vector.svg')" }}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h={{ base: 'unset', md: "535px" }}
      >
        <Box pt={{ base: "0px", md: "50px", lg: "0px" }}>
          <AspectRatio
            maxW='459px'
            h={{ base: "270px", md: "250px", lg: "332px" }}
            mt={{ base: "0px", md: "100px" }}
            mr={{ base: 'auto', md: "20px" }}
            ml="auto"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ borderRadius: '20px' }}
              src='https://www.youtube.com/embed/CgAx5YpU6Ko?si=rBKxKDJPwwWZtf74'
            />
          </AspectRatio>
        </Box>
      </Box >
    </Flex >
  )
}
