import React from 'react'
import HeadingText from '@/components/HeadingText'
import Navbar from '@/components/Navbar'
import { getContacts } from '@/lib/data'
import {FiTrash , FiEdit } from "react-icons/fi"
import Link from 'next/link'
const HomePage = async () => {

  const contacts = await getContacts()
  console.log('contacts', contacts)
  return (
    <main>
      <HeadingText title='Contact Book' description='All contact are below'></HeadingText>
      <Navbar />
      <div className='flex flex-col px-4 py-4 '>
        <table className='table-auto w-full text-center whitespace-nowrap'>

          <tr>
            <th className='px-4 py-3  title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1'>
              First Name
            </th>
            <th className='px-4 py-3  title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1'>
              Last Name
            </th>
            <th className='px-4 py-3  title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1'>
              Email
            </th>
            <th className='px-4 py-3  title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1'>
              Contact
            </th>
            <th className='px-4 py-3  title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1'>
              Action
            </th>
          </tr>


          <tbody>
            {
              contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.firstName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.lastName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.email}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.phone}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-2'>
                    <Link href={`contact/${contact.id}`}>
                      <FiEdit/>
                    </Link>
                    <form>
                      <input hidden name='id' defaultValue={contact.id} />
                      <button type='submit'>
                      <FiTrash style={{color: 'red'}}/>
                      </button>
                  
                    </form>
                  </td>
                </tr>
              ))
            }
           
          </tbody>
        </table>

      </div>
    </main>
  )
}

export default HomePage