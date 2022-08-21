import React from "react";
import {
  chakra,
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  FormHelperText,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Divider,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

export default function JobPosting() {
  return (
    <>
      <Box p={10}>
        <Box>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                  Create your job post here
                </Heading>
                <Text mt={1} fontSize="sm" color="gray.600">
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              boxShadow={"0px 8px 32px 10px rgba(0, 0, 0, 0.221)"}
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  spacing={6}
                  p={{
                    sm: 6,
                  }}
                >
                  <SimpleGrid columns={3} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="lg"
                        fontWeight="xl"
                        color="gray.700"
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        borderColor="brand.200"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="60%"
                        rounded="md"
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[3, 2]}>
                      <FormLabel fontSize="lg" fontWeight="md" color="gray.700">
                        Website
                      </FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg="gray.50"
                          color="gray.500"
                          rounded="md"
                        >
                          http://
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          placeholder="www.example.com"
                          borderColor="brand.200"
                          focusBorderColor="brand.400"
                          rounded="md"
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <div>
                    <FormControl id="email" mt={1}>
                      <FormLabel fontSize="lg" fontWeight="md" color="gray.700">
                        About
                      </FormLabel>
                      <Textarea
                        placeholder="you@example.com"
                        mt={1}
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        borderColor={"brand.200"}
                        fontSize={{
                          sm: "sm",
                        }}
                      />
                      <FormHelperText>
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </FormHelperText>
                    </FormControl>
                  </div>
                  <FormControl as={GridItem} colSpan={[6, 3]} w={"20%"}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="lg"
                      fontWeight="md"
                      color="gray.700"
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      borderColor={"brand.200"}
                      shadow="sm"
                      size="sm"
                      rounded="md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </Select>
                  </FormControl>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            ></GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
