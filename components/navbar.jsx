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

export default function NavBar() {
  const bg = useColorModeValue("primaryColor.50", "gray.800");
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
          >
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>TransCareer</VisuallyHidden>
              </chakra.a>
              <chakra.h1
                variant="ghost"
                fontSize="xl"
                fontWeight="medium"
                ml="2"
                color={"white"}
              >
                TransCareer
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={10}>
              <HStack
                spacing={5}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#ffffff10",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Post a job
                </Button>
                <Button
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#ffffff10",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  fontSize={"xl"}
                  _hover={{
                    bgColor: "#ffffff10",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Contact
                </Button>
              </HStack>
              <Button
                bgColor="primaryBtn.500"
                size="lg"
                fontSize={"xl"}
                transition="all 0.3s ease-in-out"
                _hover={{
                  bgColor: "primaryBtn.400",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Find internships
              </Button>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
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
                    _hover={{ bgColor: "#ffffff10" }}
                  >
                    Post a Job
                  </Button>
                  <Button
                    w="20%"
                    variant="ghost"
                    _hover={{ bgColor: "#ffffff10" }}
                  >
                    About
                  </Button>
                  <Button
                    w="20%"
                    variant="ghost"
                    _hover={{ bgColor: "#ffffff10" }}
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
