import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar, Image, Menu, MenuButton, MenuItem, MenuList, Portal,useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import PostActions from './PostActions';

const UserPost = ({ likes, replies, postImg, postTitle }) => {
  const [liked, setLiked] = useState(false);
  const toast=useToast();
  const copyURL=()=>{
    const currentURL=window.location.href+'/post/:id';
    navigator.clipboard.writeText(currentURL).then(()=>{
      console.log('Url is copied');
        toast({
          title: 'URL copied successfully',
         
          status: 'success',
          duration: 1200,
          isClosable: true,
        })
    })
  };


  return (
    <Link to={"/markzukerberg/post/1"}>
      <Flex gap={3} mb={4} py={5} onClick={(e) => e.stopPropagation()}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="Mark Zuckerberg" src="/zuck-avatar.png" />
          <Box w='1px' h={"full"} bg="gray.light" my={2}> </Box>
          <Box position={"relative"} width={"full"}>
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                markzukerberg
              </Text>
              <Image src='/verified.png' w={4} h={4} ml={2} />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}> 1d </Text>
              <Box onClick={(e) => e.preventDefault()}>
                <Menu>
                  <MenuButton>
                    <BsThreeDots size={24} cursor={"pointer"} />
                  </MenuButton>
                  <Portal>
                    <MenuList>
                      <MenuItem onClick={copyURL}>
                        Copy Post Link
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Box>
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
              <Image src={postImg} w={"full"} />
            </Box>
          )}
          <Flex gap={3} my={1}>
            <PostActions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}> {replies}</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}> {likes}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
