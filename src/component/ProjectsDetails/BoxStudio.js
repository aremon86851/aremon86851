import React from 'react';
import img2 from '../../assest/BoxStudio.png'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BoxStudio = () => {
    return (
        <div className='mt-16 text-left max-w-[1440px] mx-auto text-white text-xl'>
            <div>

                <PhotoProvider>
                    <PhotoView src={img2}>
                        <img className='object-cover w-full' src={img2} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='mt-24'>
                <h2><span className='text-white text-3xl font-bold'>Description : </span>Box studio is a personal portfolio type website. In this website owner showed her talent about photography. And shows her best photo in wild life photography</h2>
                <h2 className='text-white text-3xl font-bold mt-10'>Features : </h2>
                <ul className='list-disc ml-24 mb-10'>
                    <li>You can give review any of services</li>
                    <li>Also you can add a new services for you</li>
                    <li>In this website , you can log in with your email and password</li>
                    <li>Also you can log in with your google account</li>
                    <li>In this website, you have private route</li>
                    <li>You can show your all reviews</li>
                    <li>Also, you may delete or update your reviews</li>
                </ul>
            </div>
        </div>
    );
};

export default BoxStudio;