import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  useDisclosure,
  Input,
  Flex,
} from "@chakra-ui/react";
import { MdPermMedia } from "react-icons/md";
import { AiOutlineFileGif } from "react-icons/ai";
export const PostBlog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme={"blue"}>
        CREATE BLOG
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>CREATE NEW BLOG</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"100%"} p={5} border={"1px solid red"} m={"auto"}>
              <form>
                <FormControl isRequired>
                  <FormLabel>Blog Title</FormLabel>
                  <Input type="title" />
                  <FormLabel>Blog Discription</FormLabel>
                  <Textarea placeholder="Enter Description" />
                  <FormLabel>Blog Image URL</FormLabel>
                  <Input placeholder="Enter Blog Image URL" />
                </FormControl>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Flex gap={"10px"}>
                    <MdPermMedia size={"20px"} />
                    <AiOutlineFileGif size={"20px"} />
                  </Flex>
                  <Button colorScheme={"blue"}>POST</Button>
                </Flex>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
