import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { postBlog } from "../Redux/Blog/action";
export const PostBlog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blogData, setBlogData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(blogData);
    dispatch(postBlog(blogData)).then((res) => {
      console.log(res);
      onClose();
    });
  };

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
            <Box w={"100%"} p={5} m={"auto"} boxShadow={"xs"} mb={"20px"}>
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Blog Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Blog Title"
                    name="title"
                    onChange={handleChange}
                  />
                  <FormLabel>Blog Discription</FormLabel>
                  <Textarea
                    type="text"
                    name="description"
                    placeholder="Enter Blog Description"
                    onChange={handleChange}
                  />
                  <FormLabel>Blog Image URL</FormLabel>
                  <Input
                    type="text"
                    name="blog_image"
                    placeholder="Enter Blog Image URL"
                    onChange={handleChange}
                  />
                </FormControl>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={5}
                >
                  <Flex gap={"10px"}>
                    <MdPermMedia size={"20px"} />
                    <AiOutlineFileGif size={"20px"} />
                  </Flex>
                  <Button type="submit" colorScheme={"blue"}>
                    POST
                  </Button>
                </Flex>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
