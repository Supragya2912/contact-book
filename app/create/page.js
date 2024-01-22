import React from 'react'
import HeadingText from '@/components/HeadingText'
import CreateForm from '@/components/CreateForm'

const page = () => {
  return (
  <section>
    <HeadingText title="Add Contact" description="Add Contact Below" />

    <div className='flex flex-col items-center justify-center'>
        <CreateForm/>

    </div>
  </section>
  )
}

export default page