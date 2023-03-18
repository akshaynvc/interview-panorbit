import React from 'react'
import Layout from '../components/layout';
import { useParams } from 'react-router-dom';


const ProfilePage = () => {
  const {id}= useParams()
  console.log(id,'id')
  return (
    <Layout>
    ProfilePage
</Layout>
  )
}

export default ProfilePage