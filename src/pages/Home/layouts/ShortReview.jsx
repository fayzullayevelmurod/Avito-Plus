import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Container, Button } from '../../../components/common'

export default function ShortReview() {
  return (
    <Container>
      <Flex justify="space-between" align="center" py="50px" gap="20px">
        <Box maxW="343px">
          <Heading color="black" lineHeight="120%" fontWeight="900">
            Краткий обзор <br /><Box as="span" color="#805AD5">— 120 секунд</Box>
          </Heading>
          <Text fontSize="14px" my="17px">Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — <br />
            Это все не покидая таблицы. </Text>
          <Button px="16px" borderRadius="39px" mr="20px">Начать сейчас</Button>
          <Button px="16px" borderRadius="39px" bg="#EDF2F7" color="black" borderColor="white">Возможности</Button>
        </Box>
        <Box
          bgImage="url('/assets/svg/vector.svg')"
          bgSize="cover"
          bgPosition="center"
          w="450px"
          h="535px"
        >
          <Box maxW='459px' h="332px" mt="100px" borderRadius="20px" ml="-20px" bg="#D9D9D9" overflow="hidden">
            <AspectRatio ratio={1.38}>
              <iframe
                title='video'
                src='https://www.youtube.com/embed/CgAx5YpU6Ko?si=rBKxKDJPwwWZtf74'
              />
            </AspectRatio>
          </Box>
        </Box>
      </Flex>
    </Container >
  )
}
