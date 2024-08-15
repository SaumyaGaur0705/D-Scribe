import React from 'react'
import UserPost from '../components/UserPost'
import { Divider } from '@chakra-ui/react'
import Comments from '../components/Comments'

const PostPage = () => {
  return (
    <>
    <UserPost likes={1200} replies={418} postImg="/post1.png" postTitle="Let's talk about Threads." /> 
    <Divider/>
    <Comments comment="Looks really good" creatdAt="2d" likes={100} username="jhondoe" userAvatar="https://bit.ly/dan-abramov"/>
    <Comments comment="Great Content" creatdAt="1d" likes={10} username="Bob" userAvatar="https://bit.ly/dan-abramov"/>
    </>
  )
}

export default PostPage
