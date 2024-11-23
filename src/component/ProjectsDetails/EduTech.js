import React from 'react';
import img3 from '../../assest/EduTech.png'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const EduTech = () => {
    return (
        <div className='mt-16 text-left max-w-[1440px] mx-auto text-white text-xl'>
            <div>

                <PhotoProvider>
                    <PhotoView src={img3}>
                        <img className='object-cover w-full' src={img3} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='mt-24'>
                <h2><span className='text-white text-3xl font-bold'>Description : </span>Edu tech is a learning platform. iN this website a user can read a course blog and download the blog pdf version from this website. Also have a blog section in this website you can read blog and get knowledge</h2>
                <h2 className='text-white text-3xl font-bold mt-10'>Features : </h2>
                <ul className='list-disc ml-24 mb-10'>
                    <li>EduTech have Toggle dark theme and light theme option</li>
                    <li>You can Log-in using email & password</li>
                    <li>Also Log in with Google and Github account
                    </li>
                    <li>Also you also created your account using email & password
                    </li>
                    <li>After login your profile show on the navbar and Log out button show
                    </li>
                    <li>EduTech is online learning platform
                    </li>
                    <li>Also using Tailwind css framework
                    </li>
                    <li>using daisyUi tailwindcss component library
                    </li>
                    <li>Reat-to-pdf using for download pdf file
                    </li>
                    <li>using react router and more of technologies
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EduTech;