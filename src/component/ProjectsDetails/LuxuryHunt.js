import React from 'react';

import img1 from '../../assest/luxury-hunt.png'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LuxuryHunt = () => {
    return (
        <div className='mt-16 text-left max-w-[1440px] mx-auto text-white text-xl'>
            <div>

                <PhotoProvider>
                    <PhotoView src={img1}>
                        <img className='object-cover w-full' src={img1} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='mt-24'>
                <h2><span className='text-white text-3xl font-bold'>Description : </span>Luxury hunt is a resale based website. In this website a seller can sale her used car and a buyer can buy that used car and also a buyer can payment with stripe</h2>
                <h2 className='text-white text-3xl font-bold mt-10'>Features : </h2>
                <ul className='list-disc ml-24 mb-10'>
                    <li>in this web app you can add your car which you want to sale</li>
                    <li>you can buy a car from this website</li>
                    <li>and also you can pay for you purchase item using stripe</li>
                    <li>if you want to sale your can then you can sign up our website as seller</li>
                    <li>also for time save you can also sign up/ login with your direct social google account but every social logged in user is like normal user</li>
                    <li>you can advertise you item in home page advertise section</li>
                    <li>if you are a seller then you can add your product, see your product and if you want to delete your product from this website you can did it</li>
                    <li>if you are a buyer then you can see your order, and pay for that item</li>
                    <li>A admin can all user and all buyer</li>
                </ul>
            </div>
        </div>
    );
};

export default LuxuryHunt;