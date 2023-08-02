import React from 'react'
import bannerContact from "@assets/img/banner_contact.png"
import Image from 'next/image'
import BtnDowload from '../Atoms/BtnDowload'

export default function Contact() {
    return (
        <div>
            <div className='md:flex'>
                <div className='md:w-6/12 bg-n90'>

                </div>
                <div className='md:w-6/12'>
                    <Image src={bannerContact} alt="icon" objectFit="contain" />
                </div>
            </div>
            <div className='bg-black flex flex-col justify-center items-center'>
                {/* Button Download */}
                <div className='flex md:mt-[60px] md:gap-x-6'>
                    <div className='w-fit'>
                        <BtnDowload type='apple' />
                    </div>
                    <div className='w-fit'>
                        <BtnDowload type='android' />
                    </div>
                </div>
                <p className='my-6'>Copyright © 2023 Venus AI. All rights reserved</p>
            </div>
        </div>
    )
}
