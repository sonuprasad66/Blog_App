import { Avatar, Box, Button, Flex, Heading, Collapse } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/Auth/action";
import { getBlog } from "../Redux/Blog/action";

export const AllBlogs = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const blog = useSelector((state) => state.BlogReducer.blog);

  console.log(blog);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <>
      <Box>
        <Flex>
          <Flex>
            <Avatar src="" alt="" />
            <Box>
              <Heading size={"sm"}>Title</Heading>
              <Collapse startingHeight={20} in={show}>
                Anim pariatur cliche reprehenderit,
              </Collapse>
              <Button size="sm" onClick={handleToggle} mt="1rem">
                Show {show ? "Less" : "More"}
              </Button>
            </Box>
          </Flex>
          <Button>...</Button>
        </Flex>
      </Box>
    </>
  );
};
