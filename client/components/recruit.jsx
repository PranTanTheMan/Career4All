import React from "react";
import { chakra, Box, Flex, Link, SimpleGrid, Button } from "@chakra-ui/react";
import Image from "next/image";
import { RiShareBoxLine } from "react-icons/ri";

export default function Recruit() {
  return (
    <>
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        p={20}
        w="full"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
      >
        <Box
          shadow="xl"
          _dark={{
            bg: "gray.800",
          }}
          px={20}
          py={5}
          mx="auto"
        >
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={"10rem"}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 34,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "5xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="brand.200"
                lineHeight={{
                  md: "shorter",
                }}
              >
                Looking for perfect candidates?
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "xl",
                }}
              >
                Career4All allows you to find the perfect candidate for your
                company. We have a large pool of candidates who are looking for
                a job who are also seeking for gender equality. Make your post
                now and start receiving applications.
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                fontSize={"lg"}
                _dark={{
                  bg: "gray.700",
                }}
                bgColor="transparent"
                variant="unstyled"
                _hover={{
                  color: "primaryBtn.300",
                }}
                color="primaryBtn.500"
                as="a"
                href="/"
                rightIcon={<RiShareBoxLine size="14px" />}
              >
                Learn More
              </Button>
            </Box>
            <Box pb={{ base: "0", md: "12" }} pl={{ base: "0", md: "40" }}>
              <Image src={"/recruit.svg"} width={"450px"} height={"450px"} />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box
              order={{
                base: "initial",
                md: 2,
              }}
            >
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "5xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="brand.200"
                lineHeight={{
                  md: "shorter",
                }}
              >
                Choose the right job for you.
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "xl",
                }}
              >
                Whatever you love to do. There's someone out there who are
                looking for your expertise. We have a large pool of Job listings
                that are available for you to choose from that include actions
                towards Gender equality and inclusion.
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                fontSize={"lg"}
                _dark={{
                  bg: "gray.700",
                }}
                bgColor="transparent"
                variant="unstyled"
                _hover={{
                  color: "primaryBtn.300",
                }}
                color="primaryBtn.500"
                as="a"
                href="/"
                rightIcon={<RiShareBoxLine size="14px" />}
              >
                Learn More
              </Button>
            </Box>
            <Image src={"/unemployed.svg"} width={"350px"} height={"350px"} />
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={"10rem"}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 34,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "5xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="brand.200"
                lineHeight={{
                  md: "shorter",
                }}
              >
                Start your career now.
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "xl",
                }}
              >
                You're not ready for a job yet? Don't worry we have a large
                variety of jobs available with concrete details and requirements
                for you to start working on them right away. Start now for you
                and your future.
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                fontSize={"lg"}
                _dark={{
                  bg: "gray.700",
                }}
                bgColor="transparent"
                variant="unstyled"
                _hover={{
                  color: "primaryBtn.300",
                }}
                color="primaryBtn.500"
                as="a"
                href="/"
                rightIcon={<RiShareBoxLine size="14px" />}
              >
                Learn More
              </Button>
            </Box>
            <Box pt={{ base: "0", md: "10" }} pl={{ base: "0", md: "40" }}>
              <Image src={"/jobOffers.svg"} width={"500px"} height={"500px"} />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
