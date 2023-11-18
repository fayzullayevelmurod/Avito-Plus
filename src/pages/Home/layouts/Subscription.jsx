import { Fragment } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Button } from "../../../components/common";
import { plans } from "../mock";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <Box py="80px">
      <Flex justify="space-around" gap="20px" align="center">
        <Heading fontSize="30px" fontWeight="800" textAlign="center">
          Доступные тарифы <br />
          <Box color="#805AD5" as="span">
            Для бизнеса
          </Box>
        </Heading>
        <Text >
          Выберите наиболее подходящий для вас тариф на сервисе. <br />
          Стоимость зависит от количества объявлений.
        </Text>
      </Flex>

      {plans.map((plan) => (
        <Fragment key={plan.id}>
          <Box my="25px" as="hr" />
          <Flex justify="space-around" gap="20px" align="center">
            <Heading
              w="200px"
              textAlign="center"
              fontSize="20px"
              fontWeight={700}
            >
              {plan.title}
            </Heading>

            <Flex gap="14px" direction="column">
              {plan.info.map((planText, idx) => (
                <Flex gap="10px" align="center" key={idx}>
                  <Flex
                    justify="center"
                    align="center"
                    as="span"
                    bg="#35A169"
                    w="20px"
                    h="20px"
                    borderRadius="100%"
                  >
                    <CheckIcon color="white" boxSize={3} />
                  </Flex>
                  <Text fontSize="14px" fontWeight={400}>
                    {planText}
                  </Text>
                </Flex>
              ))}
            </Flex>

            <Heading fontSize="25px" fontWeight={700}>
              {plan.price} {plan.price !== "Бесплатно" && "руб."}
            </Heading>

            <Link to="/subscriptions">
              <Button>
                <Text>Начать</Text>
              </Button>
            </Link>
          </Flex>
        </Fragment>
      ))}
    </Box>
  );
}
