import React from "react";
import { chakra, Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import CountUp from "react-countup";
import Head from "next/head";
import AOS from "aos";
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Box
        pos="relative"
        overflow="hidden"
        borderBottom={"1px solid white"}
        bgColor={"brand.50"}
        data-aos={"fade-right"}
        data-aos-duration={"1000"}
      >
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
            bgColor={"brand.50"}
            data-aos="fade-right"
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
              bgColor={"brand.50"}
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
                bgColor={"brand.50"}
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
                  bgColor={"brand.50"}
                  data-aos="fade-right"
                >
                  <chakra.span
                    display={{
                      base: "block",
                      xl: "inline",
                    }}
                    color="brand.200"
                    bgColor={"brand.50"}
                  >
                    Career4
                  </chakra.span>
                  <chakra.span
                    display={{
                      base: "block",
                      xl: "inline",
                    }}
                    color="primaryBtn.500"
                    bgColor={"brand.50"}
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
                  color="gray.700"
                  lineHeight="base"
                  data-aos="fade-right"
                >
                  With true Gender equity, the best career options, and a global
                  network of over{" "}
                  <CountUp
                    start={0}
                    duration={3}
                    end={100}
                    easingFn
                    className="gradient"
                  />
                  + career options, you can start your career with confidence.
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
                  bgColor={"brand.50"}
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
                      href="/jobs"
                    >
                      Get started
                    </chakra.a>
                  </Box>
                </Stack>
              </Box>
              <Image
                src={"/heroSVG.svg"}
                width={"600px"}
                height={"600px"}
                className="hero-image"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
