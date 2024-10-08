import React from 'react'
import { Box, Flex,  Link,Text, VStack } from '@chakra-ui/layout'
import { Avatar, Menu, MenuButton, MenuItem, MenuList, Portal, useToast } from '@chakra-ui/react';
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
const UserHeader = () => {
   const toast=useToast();
  const copyURL=()=>{
    const currentURL=window.location.href;
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
    <VStack gap={4} alignItems={"start"}>
       <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
                Mark Zukerbeg
            </Text>
           <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markzukerberg</Text>
            <Text fontSize={"xs"}bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>Threads.next</Text>
           </Flex>
        </Box>
        <Box>
         <Avatar
         name="Mark Zukerberg"
         src="/zuck-avatar.png"
         size={{
          base:"lg",
          md:"xl",
         }}
         />
       </Box>  
       </Flex>
             <Text> Co founder , executive chairman</Text>
             <Flex w={"full"} justifyContent={"space-between"}>

                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>3.2k follwers</Text>
                    <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}> </Box>
                    <Link color={"gray.light"}>instagram.com</Link> 
                </Flex>
                <Flex>
                  <Box className='icon-container'>
                    <BsInstagram size={24} cursor={"pointer"}/>
                  </Box>
                  <Box className='icon-container'>
                    <Menu>
                      <MenuButton>
                          <CgMoreO size={24} cursor={"pointer"}/>
                      </MenuButton>
                      <Portal>
                        <MenuList>
                          <MenuItem onClick={copyURL}>
                          Copy Link
                          </MenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                    
                  </Box>
                </Flex>

             </Flex>

             <Flex w={"full"}>
              <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
              <Text fontWeight={"bold"}>Public Post</Text></Flex>
               <Flex flex={1} borderBottom={"1.5px solid gray"} justifyContent={"center"} color={"gray.light "} pb="3" cursor={"pointer"}>
               <Text fontWeight={"bold"}>Private Post</Text></Flex>
             </Flex>
     </VStack>
  );
};

export default UserHeader
