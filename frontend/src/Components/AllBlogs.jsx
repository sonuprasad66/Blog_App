import {
  Avatar,
  Box,
  Flex,
  Heading,
  Collapse,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useToast,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Button,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/Auth/action";
import { deleteBlog, getBlog } from "../Redux/Blog/action";
import { SlOptions } from "react-icons/sl";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { GrSave } from "react-icons/gr";
import { EditBlog } from "../Pages/EditBlog";

export const AllBlogs = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleToggle = () => setShow(!show);
  const blog = useSelector((state) => state.BlogReducer.blog);
  const user = useSelector((state) => state.AuthReducer.currentUser);
  const isLoading = useSelector((state) => state.BlogReducer.isLoading);

  console.log(isLoading);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id)).then((res) => {
      toast({
        title: res.payload.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch(getBlog());
    });
  };

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <>
      <Center>
        {isLoading ? (
          <>
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </>
        ) : (
          <>
            <Box mt={"10px"} w={"40%"}>
              {blog.length > 0 ? (
                blog?.map((item) => (
                  <Box border={"1px solid red"} mt={"10px"}>
                    <Flex
                      mt={"10px"}
                      p={5}
                      alignItems={"start"}
                      justifyContent={"space-between"}
                    >
                      <Flex gap={"10px"}>
                        <Avatar
                          src={item.user_profile_pic}
                          alt="user_profile_pic"
                        />
                        <Box>
                          <Heading size={"sm"}>{item.title}</Heading>
                          <Flex>
                            <Box w={"80%"}>
                              <Collapse startingHeight={20} in={show}>
                                {item.description}
                              </Collapse>
                            </Box>
                            {show ? (
                              <ChevronUpIcon
                                onClick={handleToggle}
                                fontSize={"20px"}
                                cursor={"pointer"}
                              />
                            ) : (
                              <ChevronDownIcon
                                onClick={handleToggle}
                                mt={1}
                                fontSize={"20px"}
                                cursor={"pointer"}
                              />
                            )}
                          </Flex>
                        </Box>
                      </Flex>
                      <Menu>
                        <MenuButton>
                          <SlOptions />
                        </MenuButton>
                        <MenuList>
                          {user._id === item.user_id ? (
                            <>
                              <EditBlog id={item._id} />
                              <MenuItem onClick={() => handleDelete(item._id)}>
                                Delete
                              </MenuItem>
                            </>
                          ) : (
                            <>
                              <MenuItem>Add To Favorite</MenuItem>
                              <MenuItem>Save</MenuItem>
                            </>
                          )}
                        </MenuList>
                      </Menu>
                    </Flex>
                    <Box>
                      <Image w={"100%"} h={"350px"} src={item.blog_image} />
                    </Box>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      p={5}
                    >
                      <Flex gap={3}>
                        <BsHeart />
                        <BsHeartFill />
                        <FaRegComment />
                        <FaRegShareSquare />
                      </Flex>
                      <GrSave />
                    </Flex>
                  </Box>
                ))
              ) : (
                <Box> No blogs</Box>
              )}
            </Box>
          </>
        )}
      </Center>
    </>
  );
};
