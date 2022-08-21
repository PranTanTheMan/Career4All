import React from "react";
import { Flex, Box, chakra, Image, Link } from "@chakra-ui/react";

export default function about() {
  return (
    <>
      <Flex p={10} w="100%" alignItems="center" justifyContent="center">
        <Box
          w="xs"
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            alt="avatar"
          />

          <Box py={10} textAlign="center">
            <Link
              display="block"
              fontSize="4xl"
              color="gray.800"
              fontWeight="bold"
              href={"https://github.com/prantantheman"}
              target="_blank"
            >
              PranTanTheMan
            </Link>
            <chakra.span fontSize="xl" color="gray.700">
              Developer
            </chakra.span>
          </Box>
        </Box>
        <Box
          w="xs"
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            alt="avatar"
          />

          <Box py={10} textAlign="center">
            <Link
              display="block"
              fontSize="4xl"
              color="gray.800"
              fontWeight="bold"
              href={"https://github.com/siddharthd0"}
              target="_blank"
            >
              Siddharthd0
            </Link>
            <chakra.span fontSize="xl" color="gray.700">
              Developer
            </chakra.span>
          </Box>
        </Box>
        <Box
          w="xs"
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            alt="avatar"
          />

          <Box py={10} textAlign="center">
            <Link
              display="block"
              fontSize="4xl"
              color="gray.800"
              fontWeight="bold"
              href={"https://github.com/renisalcedo"}
              target="_blank"
            >
              renisalcedo
            </Link>
            <chakra.span fontSize="xl" color="gray.700">
              Developer
            </chakra.span>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
