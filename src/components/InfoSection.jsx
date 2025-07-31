import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-green-800'/>,
            titel: 'free shipping',
            description: 'Get your orders deliver with no extra cost',
        },
        {
            icon: <FaHeadset className='text-3xl text-green-800' />,
            titel: 'Support 24/7',
            description: 'Get your orders deliver with no extra cost',

        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl text-green-800'/>,
            titel: '100% money back',
            description: 'Get your orders deliver with no extra cost',
        },
        {
            icon: <FaLock className='text-3xl text-green-800'/>,
            titel: '100% security',
            description: 'Get your orders deliver with no extra cost',
        },
        {
            icon: <FaTag  className='text-3xl text-green-800'/>,
            titel: 'free shipping',
            description: 'Get your orders deliver with no extra cost',
        },
    ];
    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {infoItems.map((item, index) => (
                    <div key={index} className=' flex flex-col items-center text-center p-4 border rounded-lg shadow-md  transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        {item.icon}
                        <h3 className='mt-4 text-xl font-semibold'> {item.titel}</h3>
                        <p className='mt-2 text-red-900'> {item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoSection