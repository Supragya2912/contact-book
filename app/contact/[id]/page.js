import React from 'react'
import HeadingText from '@/components/HeadingText'
import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
 import { getContact } from '@/lib/data'

const SingleContact = async({params}) => {
    const {id} = params;
    const contact = await getContact(id)
    console.log(contact)

  return (
 <section>
    <HeadingText title='Contact Data' description="view and update"></HeadingText>
    <Navbar/>
    {/* {contact.firstName} */}
 </section>
  )
}

export default SingleContact