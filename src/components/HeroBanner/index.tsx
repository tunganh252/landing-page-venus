"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import BtnDowload from '../BtnDowload';
import './style.scss';

import HeroBanner1 from "@assets/img/hero_banner1.png";
import HeroBanner2 from "@assets/img/hero_banner2.png";
import HeroBanner4 from "@assets/img/hero_banner4.png";
import HeroBanner5 from "@assets/img/hero_banner5.png";
import HeroBanner6 from "@assets/img/hero_banner6.png";
import HeroBanner7 from "@assets/img/hero_banner7.png";
import HeroBanner8 from "@assets/img/hero_banner8.png";
import HeroBanner9 from "@assets/img/hero_banner9.png";
import overlay_gradient_bottom_hero from "@assets/img/overlay_gradient_bottom_hero.png";
import overlay_gradient_top_hero from "@assets/img/overlay_gradient_top_hero.png";

export default function HeroBanner() {
    return (
        <div id="intro" className='hero-banner-container lg:flex pt-32 lg:pt-40 gap-x-5'>

            {/* Block Title */}
            <div className='lg:w-7/12 lg:mt-[60px]'>
                {/* Animate Title */}
                <div className='block-title flex'>
                    <p className='text-3xl lg:text-5xl xl:text-6xl'>Creating</p>

                    <div className='w-full'>
                        <SLideTextAI />
                    </div>

                </div>
                <p className='text-3xl lg:text-5xl xl:text-6xl mt-2.5'>with <span className='font-bold'>Venus AI</span></p>
                <p className='text-base lg:text-lg xl:text-xl mt-5  w-11/12 lg:w-8/12'>It&apos;s never been simpler or enjoyable to get ready for
                    the breathtaking AI artworks with us.
                </p>

                {/* Button Download */}
                <div className='flex mt-6 lg:mt-[50px] gap-x-[18px] lg:gap-x-6'>
                    <div className='lg:w-[232px]'>
                        <BtnDowload type='apple' />
                    </div>
                    <div className='lg:w-[232px]'>
                        <BtnDowload type='android' />
                    </div>
                </div>

                {/* Mouse scroll */}
                <div className='lg:mt-[120px] hidden lg:flex items-center'>
                    <div className="w-fit">
                        <div className="mouse-icon">
                            <div className="wheel" />
                        </div>
                    </div>
                    <p className='ml-3 text-sm'>Scroll to Explore</p>
                </div>
            </div>

            {/* Banner Slider */}
            <div className='lg:w-6/12'>
                <SlideBanner />
            </div>
        </div>
    )
}


const SLideTextAI = () => {
    const dataSlide = [
        { label: "AI AVATAR", clsColor: "text-pink" },
        { label: "AI ART", clsColor: "text-blue" },
        { label: "AI VIDEO", clsColor: "text-rose" }]

    const settings = {
        dots: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <Slider {...settings} className='slide-text-ai max-h-[60px] overflow-hidden'>
            {dataSlide.map((item, index) => (
                <p key={index} className={`uppercase text-3xl lg:text-5xl xl:text-6xl font-extrabold ml-4 ${item.clsColor}`}>
                    {item.label}
                </p>
            ))}
        </Slider>
    )
}

const SlideBanner = () => {
    const dataSlide1 = [
        { img: HeroBanner1 },
        { img: HeroBanner2 },
        { img: HeroBanner6 },
        { img: HeroBanner7 },
    ]
    const dataSlide2 = [
        { img: HeroBanner4 },
        { img: HeroBanner5 },
        { img: HeroBanner8 },
        { img: HeroBanner9 },
    ]

    const settings1 = {
        dots: false,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        verticalSwiping: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
    }

    const settings2 = {
        dots: false,
        vertical: true,
        slidesToShow: 3.6,
        slidesToScroll: 1,
        verticalSwiping: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <div className='flex justify-center gap-x-5 relative select-none mt-5'>
            <div className='w-[328px] lg:w-fit absolute top-0 left-auto z-10 mt-[_-5px]'>
                <Image src={overlay_gradient_top_hero} alt="banner" objectFit='contain' loading='lazy' />
            </div>

            <Slider {...settings1} className='hero-banner1 w-[154px] h-[480px] lg:w-[255px] lg:h-[664px] overflow-hidden'>
                {dataSlide1.map((item, index) => (
                    <Image key={index} src={item.img} alt="banner" width={255} height={320} loading='lazy' />
                ))}
            </Slider>

            <Slider {...settings2} className='hero-banner1 w-[154px] h-[480px] lg:w-[255px] lg:h-[664px] overflow-hidden'>
                {dataSlide2.map((item, index) => (
                    <Image key={index} src={item.img} alt="banner" width={255} height={320} loading='lazy' />
                ))}
            </Slider>
            <div className='w-[328px] lg:w-fit absolute bottom-0 left-auto z-10 mb-[_-5px]'>
                <Image src={overlay_gradient_bottom_hero} alt="banner" objectFit='contain' loading='lazy' />
            </div>
        </div>
    )
}