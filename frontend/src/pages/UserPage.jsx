import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
   <>
   <UserHeader/>
   <UserPost likes={1200} replies={418} postImg="/post1.png" postTitle="Let's talk about Threads." /> 
   <UserPost likes={480} replies={239} postImg="/post2.png" postTitle="Here's the tutorial." /> 
   <UserPost likes={721} replies={184} postImg="/post3.png" postTitle="Let's goo." /> 
   <UserPost likes={21} replies={4}  postTitle="Without Image." /> 
   </>
  )
}

export default UserPage
