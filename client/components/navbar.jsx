import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function NavBar() {
  const bg = useColorModeValue("brand.50");
  const mobileNav = useDisclosure();
  return (
    <>
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            mx="auto"
            p={"1rem 5%"}
            bgColor={"brand.50"}
          >
            <Flex bgColor={"brand.50"}>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>Career4All</VisuallyHidden>
              </chakra.a>
              <chakra.a href="/">
                <chakra.h1
                  variant="ghost"
                  fontSize="3xl"
                  fontWeight="semibold"
                  ml="2"
                  color={"brand.800"}
                  className="underline"
                  bgColor={"brand.50"}
                >
                  Career4All
                </chakra.h1>
              </chakra.a>
            </Flex>
            <HStack
              display="flex"
              alignItems="center"
              spacing={10}
              bgColor={"brand.50"}
            >
              <HStack
                spacing={5}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
                bgColor={"brand.50"}
              >
                <Link href={"/#feature-section"}>
                  <Button
                    variant="ghost"
                    fontSize={"xl"}
                    color="black"
                    _hover={{
                      bgColor: "#00000024",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    Features
                  </Button>
                </Link>
                <Button
                  color="black"
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#00000024",
                    transition: "all 0.3s ease-in-out",
                  }}
                  as="a"
                  href="/about"
                >
                  About
                </Button>
                <Button
                  color="black"
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#00000024",
                    transition: "all 0.3s ease-in-out",
                  }}
                  as="a"
                  href="/contact"
                >
                  Contact
                </Button>
                <Button
                  color="black"
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#00000024",
                    transition: "all 0.3s ease-in-out",
                  }}
                  as="a"
                  href="/postjob"
                >
                  Post a job
                </Button>
              </HStack>
              <Button
                color="black"
                bgColor="primaryBtn.500"
                size="lg"
                fontSize={"xl"}
                transition="all 0.3s ease-in-out"
                _hover={{
                  bgColor: "primaryBtn.400",
                  transition: "all 0.3s ease-in-out",
                }}
                as="a"
                href="/jobs"
              >
                Find internships
              </Button>
              <Box
                display={{ base: "inline-flex", md: "none" }}
                bgColor={"brand.50"}
              >
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="white"
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                  _hover={{
                    bgColor: "#00000024",
                    transition: "all 0.3s ease-in-out",
                  }}
                />

                <VStack
                  pos="absolute"
                  zIndex={1}
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button
                    w="20%"
                    variant="ghost"
                    color={"brand.600"}
                    _hover={{ bgColor: "#00000024" }}
                  >
                    Post a Job
                  </Button>
                  <Button
                    w="20%"
                    variant="ghost"
                    color={"brand.600"}
                    _hover={{ bgColor: "#00000024" }}
                  >
                    About
                  </Button>
                  <Button
                    w="20%"
                    variant="ghost"
                    color={"brand.600"}
                    _hover={{ bgColor: "#00000024" }}
                  >
                    Contact
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </>
  );
}
