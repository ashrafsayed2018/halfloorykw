import React from 'react'
import CallImage from '../components/CallImage'
import Contact from '../components/Contact'

const page = () => {
  return (
   <div>
     <div className='mt-32' style={{
        backgroundImage: 'url(/images/contactpage.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '200px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
  
    }}>
        <CallImage />

    </div>
    <Contact />
   </div>
  )
}

export default page
