import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  chakra,
  gap,
  Center,
  VisuallyHidden,
  Input,
  Button,
  Icon,
} from "@chakra-ui/react";
import Footer from "../components/footer";

export default function contact() {
  return (
    <>
      <Box bgColor={"brand.50"} px={8} pt={24} mx="auto" height={"100vh"}>
        <SimpleGrid
          bgColor={"brand.50"}
          alignItems="center"
          w={{
            base: "full",
            xl: 11 / 12,
          }}
          columns={{
            base: 1,
            lg: 11,
          }}
          gap={{
            base: 0,
            lg: 24,
          }}
          mx="auto"
        >
          <GridItem
            bgColor={"brand.50"}
            colSpan={{
              base: "auto",
              lg: 7,
            }}
            textAlign={{
              base: "center",
              lg: "left",
            }}
          >
            <chakra.h1
              bgColor={"brand.50"}
              mb={4}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="bold"
              lineHeight={{
                base: "shorter",
                md: "none",
              }}
              color="gray.900"
              letterSpacing={{
                base: "normal",
                md: "tight",
              }}
            >
              Contact the Career4All team!
            </chakra.h1>
            <chakra.p
              bgColor={"brand.50"}
              mb={{
                base: 10,
                md: 4,
              }}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              fontWeight="thin"
              color="gray.900"
              letterSpacing="wider"
            >
              If you want to or need to contact the Career4All team, please feel
              free to fill out this form and we will be glad to chat with you!
            </chakra.p>
          </GridItem>
          <GridItem
            bgColor={"brand.50"}
            colSpan={{
              base: "auto",
              md: 4,
            }}
          >
            <Box
              borderRadius={"20px"}
              as="form"
              mb={6}
              rounded="lg"
              shadow="xl"
              bgColor={"brand.50"}
            >
              <Center pb={0} color="gray.700">
                <chakra.h1 fontSize={"2rem"} pt={5}>
                  Start talking now
                </chakra.h1>
              </Center>
              <SimpleGrid
                bgColor={"brand.50"}
                columns={1}
                px={6}
                py={4}
                spacing={7}
              >
                <Flex>
                  <VisuallyHidden>First Name</VisuallyHidden>
                  <Input
                    outline={"1px solid #7b7b7b"}
                    _focus={{
                      outline: "1px solid #292929",
                      border: "none",
                    }}
                    _active={{
                      outline: "1px solid #7b7b7b",
                    }}
                    mt={0}
                    type="text"
                    placeholder="First Name"
                  />
                </Flex>
                <Flex>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <Input
                    outline={"1px solid #7b7b7b"}
                    _focus={{
                      outline: "1px solid #292929",
                      border: "none",
                    }}
                    _active={{
                      outline: "1px solid #7b7b7b",
                    }}
                    mt={0}
                    type="email"
                    placeholder="Email Address"
                  />
                </Flex>
                <Flex>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <Input
                    outline={"1px solid #7b7b7b"}
                    _focus={{
                      outline: "1px solid #292929",
                      border: "none",
                    }}
                    _active={{
                      outline: "1px solid #7b7b7b",
                    }}
                    mt={0}
                    type="password"
                    placeholder="Password"
                  />
                </Flex>
                <Button
                  colorScheme="brand"
                  w="30%"
                  py={2}
                  type="submit"
                  margin={"0 auto"}
                >
                  Contact
                </Button>
              </SimpleGrid>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
