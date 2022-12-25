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
  Spinner,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { MdPermMedia } from "react-icons/md";
import { AiOutlineFileGif } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editBlog, getBlog, postBlog } from "../Redux/Blog/action";

export const EditBlog = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blogData, setBlogData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  const isLoading = useSelector((state) => state.BlogReducer.isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlog({ id: id, data: blogData })).then((res) => {
      toast({
        title: res.payload.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch(getBlog());
      onClose();
    });
  };

  return (
    <>
      <MenuItem onClick={onOpen}>Edit</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>UPDATE BLOG BLOG</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"100%"} p={5} m={"auto"} boxShadow={"xs"} mb={"20px"}>
              <form onSubmit={handleSubmit}>
                <FormControl>
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
                    {isLoading ? (
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="md"
                      />
                    ) : (
                      "UPDATE"
                    )}
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
