"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@assets/img/logo.png"
import IconMenuBar from "@assets/img/icon-menu-bar.png"
import IconMenuClose from "@assets/img/icon-menu-close.png"
import "./style.scss"
import Link from 'next/link'

export default function Header() {

    const [toggleNavbar, setToggleNavbar] = useState(false)

    const handleToggleNavbar = () => setToggleNavbar(!toggleNavbar)

    return (
        <div className='header-container'>
            <div className='mobile-navbar w-full'>
                <div className='relative w-full'>
                    <div className={'flex lg:hidden justify-between items-center lg:py-8 px-6 w-full h-[88px] transition ' + `${toggleNavbar ? 'bg-n90' : 'bg-black'}`}>
                        <Link href="/" className='flex items-center'>
                            <div className=''>
                                <Image src={Logo} alt="logo" objectFit='contain' width={24} height={24} />
                            </div>
                            <p className='font-semibold ml-3'>Venus AI</p>
                        </Link>

                        <div className='cursor-pointer' onClick={handleToggleNavbar}>
                            <Image src={toggleNavbar ? IconMenuClose : IconMenuBar} alt="icon-menu" objectFit='contain' width={24} height={24} />
                        </div>
                    </div>
                    <div className={`extra-navbar absolute w-full top-full left-0 ${toggleNavbar ? 'h-auto visible' : 'h-0 invisible'}`}>
                        {
                            toggleNavbar && <>
                                <ul className='lst-link flex flex-col items-center bg-black'>
                                    <li className='text-white hover:underline w-full h-[56px] px-6 border-b border-n90 flex items-center' onClick={handleToggleNavbar}>
                                        <a className='w-full' href="#intro">Intro</a>
                                    </li>
                                    <li className='text-white hover:underline w-full h-[56px] px-6 border-b border-n90 flex items-center' onClick={handleToggleNavbar}>
                                        <a className='w-full' href="#features">Features</a>
                                    </li>
                                    <li className='text-white hover:underline w-full h-[56px] px-6 border-b border-n90 flex items-center' onClick={handleToggleNavbar}>
                                        <a className='w-full' href="#whyChooseUs">Why Choose Us</a>
                                    </li>
                                    <li className='text-white hover:underline w-full h-[56px] px-6 border-t border-n90 flex items-center' onClick={handleToggleNavbar}>
                                        <a className='w-full' href="#contact">Contact</a>
                                    </li>
                                </ul>
                                <div className='overlay transition' />
                            </>
                        }
                    </div>


                </div>
            </div>



            <div className='hidden lg:flex justify-between  desktop-navbar lg:py-8 px-6 lg:px-24 2xl:px-80 bg-black w-full h-[104px]'>
                <Link href="/" className='flex items-center'>
                    <div className=''>
                        <Image src={Logo} alt="logo" objectFit='contain' width={40} height={40} />
                    </div>
                    <p className='text-xl font-semibold ml-3'>Venus AI</p>
                </Link>

                <ul className='flex items-center gap-x-20'>
                    <li className='text-white hover:underline'><a href="#intro">Intro</a></li>
                    <li className='text-white hover:underline'><a href="#features">Features</a></li>
                    <li className='text-white hover:underline'><a href="#whyChooseUs">Why Choose Us</a></li>
                    <li className='text-white hover:underline'><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>
    )
}
