import React from 'react';
import aboutimg from '../../assest/1.jpg'
import Heading from '../Heading/Heading';
const AboutMe = () => {
    return (
        <div className='max-w-[1440px] mx-auto min-h-screen' id='aboutme'>
            <Heading>About Me...</Heading>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='flex items-center'>
                        <div className='text-left'>
                            <h2 className='text-left text-3xl text-white'>Hi,</h2>
                            <p className='text-3xl text-white italic indent-8'>I'm <span className='font-semibold'>Abdur Rahman Emon</span> and  I'm a frontend developer . Now I'm learning more about frontend development . I want to be a good frontend developer. If you want a frontend developer who is known very well about frontend then you can contact me without any tension. Because i will provide you high performance service and friendly environment .</p>
                        </div>
                    </div>
                    <div className='py-5 px-10'>
                        <img className='w-full' src={aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;