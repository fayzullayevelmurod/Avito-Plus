import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Button } from '../../../components/common'
import { Link } from 'react-router-dom'

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
          Краткий обзор <br /><Box as="span" color="#805AD5">— 120 секунд</Box>
        </Heading>
        <Text textAlign={{ base: 'center', md: 'unset' }} fontSize="14px" my="17px">Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — <br />
          Это все не покидая таблицы. </Text>
        <Flex gap={{ base: "10px", md: "30px" }} flexWrap="wrap" justify="center">
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
        w="450px"
        h={{ base: 'unset', md: "535px" }}
      >
        <Box
          maxW='459px'
          h="332px"
          mt="100px"
          borderRadius="20px"
          ml={{ base: 'unset', md: "-20px" }}
          overflow="hidden">
          <AspectRatio maxW="inherit" ratio={1.38}>
            <iframe
              title='video'
              src='https://www.youtube.com/embed/CgAx5YpU6Ko?si=rBKxKDJPwwWZtf74'
            />
          </AspectRatio>
        </Box>
      </Box>
    </Flex >
  )
}
