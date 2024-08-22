import React from 'react'
import favbook from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'
const FavBook = () => {
    return (
        <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <img src={favbook} className='rounded mf:w-10/12' />
            </div>
            <div className='md:w-1/2 space-y-10 space-x-12'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite<span className='text-blue-700'> Book Here!</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora dolorum enim veritatis quibusdam cupiditate eligendi distinctio quos sit exercitationem illo saepe, quo officiis fuga maxime, ipsum odio quam blanditiis.</p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1400+</h3>
                        <p>PDF Downloads!</p>
                    </div>
                </div>
                <Link to="/shop" className='mt-14 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    )
}

export default FavBook