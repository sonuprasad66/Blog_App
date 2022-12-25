import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useColorMode,
  Tooltip,
  Input,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as BrowseLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../Redux/Auth/actionTypes";
import { PostBlog } from "./PostBlog";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.AuthReducer.currentUser);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch({ type: types.USER_LOGOUT_SUCCESS });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Heading textAlign={"center"} w={"100%"} pl="80px">
              <BrowseLink to={"/"}>BLOG</BrowseLink>
            </Heading>
          </HStack>
          <HStack spacing={8} alignItems={"center"} w="50%">
            <Input placeholder="Search Blog" bg={"light"} />
          </HStack>
          {token ? (
            <HStack alignItems={"center"}>
              <PostBlog />
            </HStack>
          ) : (
            ""
          )}
          <Flex alignItems={"center"} gap={{ sm: "10px", lg: "30px" }}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    !token
                      ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      : user.profile_pic
                  }
                />
              </MenuButton>
              {token ? (
                <MenuList>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>My Blog</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <BrowseLink to={"/signup"}>
                    <MenuItem>Sign Up</MenuItem>
                  </BrowseLink>
                  <BrowseLink to={"/login"}>
                    <MenuItem>Log In</MenuItem>
                  </BrowseLink>
                </MenuList>
              )}
            </Menu>
            <Tooltip label="Color Mode" placement="auto">
              <Button onClick={toggleColorMode} fontSize="2xl" bg="none">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
