import React from "react";
import { chakra, Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <>
      <Box pos="relative" overflow="hidden" borderBottom={"1px solid white"}>
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            pb={{
              base: 8,
              sm: 16,
              md: 20,
              lg: 28,
              xl: 32,
            }}
            w="full"
            mb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
            border="solid 1px transparent"
          >
            <Box
              maxW={{
                base: "7xl",
              }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}
              display={"flex"}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={"center"}
            >
              <Box
                textAlign="center"
                w={{
                  base: "full",
                  md: 11 / 12,
                  xl: 8 / 12,
                }}
                mx="auto"
                mr={14}
              >
                <chakra.h1
                  fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "7xl",
                  }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="gray.900"
                  _dark={{
                    color: "white",
                  }}
                >
                  <chakra.span
                    display={{
                      base: "block",
                      xl: "inline",
                    }}
                    color="brand.100"
                    _dark={{
                      color: "brand.400",
                    }}
                  >
                    Career4
                  </chakra.span>
                  <chakra.span
                    display={{
                      base: "block",
                      xl: "inline",
                    }}
                    color="primaryBtn.500"
                    _dark={{
                      color: "brand.400",
                    }}
                  >
                    All
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  mx={{
                    sm: "auto",
                    lg: 0,
                  }}
                  mb={6}
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                  }}
                  color="gray.500"
                  lineHeight="base"
                >
                  With true Gender equity, the best career options, and a global
                  network of over{" "}
                  <CountUp start={0} duration={3} end={1000} easingFn />
                  career options, you can start your career with confidence.
                </chakra.p>
                <Stack
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                  }}
                  mb={{
                    base: 4,
                    md: 8,
                  }}
                  spacing={{
                    base: 4,
                    md: 2,
                  }}
                  justifyContent="center"
                >
                  <Box rounded="full" shadow="md">
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{
                        base: "2xl",
                        md: "2xl",
                      }}
                      rounded="md"
                      color="white"
                      bg="primaryBtn.400"
                      _hover={{
                        bg: "primaryBtn.200",
                      }}
                      px={{
                        base: 4,
                        md: 5,
                      }}
                      py={{
                        base: 3,
                        md: 3,
                      }}
                      cursor="pointer"
                      transition={["all", "ease-in-out", "0.2s"]}
                    >
                      Get started
                    </chakra.a>
                  </Box>
                </Stack>
              </Box>
              <Image src={"/heroSVG.svg"} width={"600px"} height={"600px"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
