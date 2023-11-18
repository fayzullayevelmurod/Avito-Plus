import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

import { Button } from '../../../components/common'
import { Link } from 'react-router-dom'

export default function AvitoInfo() {
  return (
    <Flex justify="space-between" align="center" gap="20px">
      <Flex direction="column" borderRadius="35px" maxW="323px" h="611px" bg="#FAFAFA" py="32px" px="38px">
        <Flex align="center" justify="center" bg="#805AD5" w="67px" h="67px" borderRadius="50%">
          <CopyIcon color="white" boxSize={6} />
        </Flex>
        <Heading mt="26px" mb="10px" fontSize="22px" fontWeight="700" color="black">
          Сделайте из 100 шт <br />-&gt; 1000 шт
        </Heading>
        <Text fontSize="14px">
          Используйте встроенную функцию рандомизатора, что бы создать уникальные копии объявлений
        </Text>
        <Box w="220px" h="220px" mt="35px" position="relative">
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
          <Button w="100%" mt="41px" >
            <Text>Рандомизатор</Text>
          </Button>
        </Link>
      </Flex>
      <Flex borderRadius="35px" maxW="640px" h="611px" bg="#FAFAFA"></Flex>
    </Flex>
  )
}
