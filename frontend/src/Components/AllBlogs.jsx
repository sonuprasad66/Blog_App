import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../Redux/Auth/action";

export const AllBlogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <Box>All Blogs</Box>
    </>
  );
};
