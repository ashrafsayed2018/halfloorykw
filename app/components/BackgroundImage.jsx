import Image from 'next/image'
import React from 'react'

const BackgroundImage = ({bgimageUrl,imageUrl}) => {
  return (
    <div className='mt-32' style={{
        backgroundImage: `url(${bgimageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
  
    }}>

        <Image src={imageUrl} width={100}
        height={100}
        className='w-[500px] h-28 object-fill ' />

     
     </div>
  )
}

export default BackgroundImage
