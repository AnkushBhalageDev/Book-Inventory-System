import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa6'
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react'
import proPic from '../assets/profile.jpg'
const Review = () => {
    return (
        <div className='my-12 px-14 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-4 rounde-lg border'>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className='mt-7 flex flex-col items-start'>
                                <p className='text-base text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam nobis minima delectus id vel vero obcaecati quibusdam! Dolorem aut error consectetur harum alias nam corporis dolore saepe magni tempore.</p>
                                <Avatar alt='avatar of jase' img={proPic} rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                                <p className='text-base text-black'>CEO,ABC Company</p>
                            </div>
                        </div>

                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default Review