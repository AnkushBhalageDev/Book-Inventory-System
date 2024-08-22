import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id,bookTitle,imageURL,authorName}=useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 flex'>
        <div>
        <img src={imageURL} alt='NA' className='h-96'/>
        <h4 className='text-2xl text-center font-bold'>{bookTitle}</h4>
        </div>
        <div className='p-24'>
            <h3 className='text-3xl text-black font-bold'> A Book By <span className='text-blue-700 text-5xl'>{authorName}</span></h3>
        </div>
    </div>
  )
}

export default SingleBook