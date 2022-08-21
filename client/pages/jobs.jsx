import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  chakra,
  Link,
} from "@chakra-ui/react";
import { 
  isEmpty,
  map
} from 'lodash'
import { useJobs } from '../hooks/useJobs'

export default function jobs() {
  const { jobs } = useJobs()

  if (isEmpty(jobs)) return <></>

  return (
    <>
      <Grid templateColumns={"repeat(3, 600px)"} mx={24} mr={"0"} my={32}>
        {jobs.map((job, key) => {
          return (
            <Box
              key={key}
              mx="auto"
              my={5}
              px={8}
              py={4}
              rounded="lg"
              shadow="2xl"
              maxW="3xl"
              w={"md"}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <chakra.span fontSize="sm" color="gray.600">
                  Aug 21, 2022
                </chakra.span>
                <Link
                  px={3}
                  py={1}
                  color="#ffffff"
                  bgColor="#118c4eb2"
                  fontSize="lg"
                  fontWeight="700"
                  rounded="md"
                >
                  {job.salary}
                </Link>
              </Flex>

              <Box mt={2}>
                <Link
                  fontSize="2xl"
                  color="gray.700"
                  fontWeight="700"
                  _hover={{
                    color: "gray.600",

                    textDecor: "underline",
                  }}
                >
                  {job.title}
                </Link>
              </Box>

              <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Link
                  color="brand.600"
                  _hover={{
                    textDecor: "underline",
                  }}
                  href={job.url}
                  target={"_blank"}
                >
                  Read more
                </Link>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </>
  );
}