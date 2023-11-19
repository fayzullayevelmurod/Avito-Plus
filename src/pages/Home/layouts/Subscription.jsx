import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Button } from "@components/common";
import { plans } from "../mock";

export default function Subscription() {
  return (
    <Box py="80px">
      <Flex direction={{ base: 'column', sm: 'row' }} justify="space-around" gap="20px" align="center">
        <Heading color="black" fontSize="30px" fontWeight="800" textAlign="center">
          Доступные тарифы <br />
          <Box color="purple" as="span">
            Для бизнеса
          </Box>
        </Heading>
        <Text color="black" maxW="480px" textAlign={{ base: 'center', sm: 'left' }}>
          Выберите наиболее подходящий для вас тариф на сервисе.
          Стоимость зависит от количества объявлений.
        </Text>
      </Flex>

      {
        plans.map((plan) => (
          <Fragment key={plan.id}>
            <Box my="25px" as="hr" />
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              gap="20px"
              align="center"
            >
              <Heading
                color="black"
                w="200px"
                textAlign="center"
                fontSize="20px"
                fontWeight={700}
              >
                {plan.title}
              </Heading>

              <Flex gap="14px" direction="column">
                {plan.info.map((planText, idx) => (
                  <Flex w="250px" gap="10px" align="center" key={idx}>
                    <Flex
                      justify="center"
                      align="center"
                      as="span"
                      bg="green.200"
                      w="20px"
                      h="20px"
                      borderRadius="100%"
                    >
                      <CheckIcon color="white" boxSize={3} />
                    </Flex>
                    <Text color="black" fontSize="14px" fontWeight={400}>
                      {planText}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <Heading color="black" textAlign="center" w="200px" fontSize="25px" fontWeight={700}>
                {plan.price} {plan.price !== "Бесплатно" && "руб."}
              </Heading>

              <Link to="/subscriptions">
                <Button w={{ base: '250px', md: 'unset' }} px="16px" type="outline" bg="white">
                  <Text>Начать</Text>
                </Button>
              </Link>
            </Flex>
          </Fragment>
        ))
      }
    </Box >
  );
}
