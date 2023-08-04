import Image from 'next/image'
import React from 'react'
import iconFeature1 from "@assets/img/icon_feature1.png"
import iconFeature2 from "@assets/img/icon_feature2.png"
import iconFeature3 from "@assets/img/icon_feature3.png"
import bannerFeature1 from "@assets/img/banner_feature1.png"
import bannerFeature2 from "@assets/img/banner_feature2.png"
import bannerFeature3 from "@assets/img/banner_feature3.png"
import bannerFeature4 from "@assets/img/banner_feature4.png"

export default function Features() {
    return (
        <div id='features' className='features-container pt-16 lg:pt-60'>
            <p className='text-2xl lg:text-4xl xl:text-5xl font-bold'>FEATURES</p>

            {/* Feature 1 */}
            <Feature1 />

            {/* Feature 2 */}
            <Feature2 />

            {/* Feature 3 */}
            <Feature3 />
        </div>
    )
}

const Feature1 = () => {
    return (
        <div>
            <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] lg:gap-x-[93px]'>
                <div className='w-6/12'>
                    <Image src={bannerFeature1} alt="features" />
                </div>
                <div className='mt-6 xl:mt-[60px] w-6/12'>
                    <div className='w-fit'>
                        <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature1} alt="icon" />
                    </div>
                    <div className='mt-10 text-3xl xl:text-4xl'>
                        <p> Enjoy making</p>
                        <p className='mt-2'>stunning and unique</p>
                        <p className='mt-2 font-bold'>AI Avatar</p>
                    </div>
                    <p className='xl:text-lg mt-6 w-full'>
                        With the help of our AI system to produce high-quality avatars with a variety of packages, making it easy for you to select.
                    </p>
                </div>
            </div>

            <div className='lg:hidden mt-10'>
                <div className='w-fit'>
                    <Image className='w-[55px] h-[55px]' src={iconFeature1} alt="icon" />
                </div>
                <div className='mt-10'>
                    <p className='text-3xl'>
                        Enjoy making
                    </p>
                    <p className='text-3xl mt-2'>
                        stunning and unique
                    </p>
                    <p className='text-3xl mt-2 font-bold'>
                        AI Avatar
                    </p>
                </div>
                <p className='mt-6 w-full'>
                    With the help of our AI system to produce high-quality avatars with a variety of packages, making it easy for you to select.
                </p>
                <div className='w-full mt-10'>
                    <Image className='w-[330px] h-[280px] md:w-full md:h-full md:scale-75 lg:scale-100' src={bannerFeature1} alt="features" />
                </div>
            </div>
        </div>
    )
}
const Feature2 = () => {
    return (
        <div>
            <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] gap-x-8'>
                <div className='mt-4 xl:mt-[60px] w-5/12'>
                    <div className='w-fit'>
                        <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature2} alt="icon" />
                    </div>
                    <div className='mt-10'>
                        <p className='text-3xl xl:text-4xl'>
                            Create <span className='font-bold'>AI Art </span>by entering amusing prompts.
                        </p>
                    </div>
                    <p className='xl:text-lg mt-6 w-full pr-12 xl:pr-24'>
                        Unleash your creativity and imagination with AI Art. Just enter a few words and watch the AI transform them into amazing artworks.
                    </p>
                </div>
                <div className='w-7/12 mt-[-4rem]'>
                    <Image src={bannerFeature2} alt="features" objectFit="cover" />
                </div>
            </div>

            <div className='lg:hidden mt-10'>
                <div className='w-fit'>
                    <Image className='w-[55px] h-[55px]' src={iconFeature2} alt="icon" />
                </div>
                <div className='mt-10'>
                    <p className='text-3xl'>
                        Create <span className='font-bold'>AI Art </span>by
                    </p>
                    <p className='text-3xl'>
                        entering amusing
                    </p>
                    <p className='text-3xl'>
                        prompts.
                    </p>
                </div>
                <p className='mt-6 w-full'>
                    Unleash your creativity and imagination with AI Art. Just enter a few words and watch the AI transform them into amazing artworks.
                </p>
                <div className='w-full mt-2 ml-[_-1rem] md:ml-[_-2rem]'>
                    <Image className='w-[330px] h-[280px] md:w-full md:h-full md:scale-75 lg:scale-100' src={bannerFeature2} alt="features" objectFit="cover" />
                </div>
            </div>
        </div>

    )
}


const Feature3 = () => {
    return (
        <div>
            <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] lg:gap-x-[93px]'>
                <div className='w-7/12 relative'>
                    <Image src={bannerFeature3} alt="features" />

                    <div className='absolute bottom-10 left-0'>
                        <Image src={bannerFeature4} alt="features" />
                    </div>
                </div>

                <div className='mt-12 xl:mt-[170px] w-5/12'>
                    <div className='w-fit'>
                        <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature3} alt="icon" />
                    </div>

                    <div className='mt-10'>
                        <p className='text-3xl xl:text-4xl'>
                            Produce creative and remarkable <span className='font-bold'>AI Videos</span>
                        </p>
                    </div>

                    <p className='xl:text-lg mt-6 w-full'>
                        You can use tinning effects, editing timeline, and adding styles as the best way to generate AI animation that are truly yours.
                    </p>

                </div>
            </div>


            <div className='lg:hidden mt-10'>
                <div className='w-fit'>
                    <Image className='w-[55px] h-[55px]' src={iconFeature3} alt="icon" />
                </div>

                <div className='mt-10'>
                    <p className='text-3xl'>Produce creative</p>
                    <p className='text-3xl'>and remarkable</p>
                    <p className='text-3xl font-bold'>AI Videos</p>
                </div>

                <p className='mt-6 w-full'>
                    You can use tinning effects, editing timeline, and adding styles as the best way to generate AI animation that are truly yours.
                </p>

                <div className='mt-10'>
                    <Image className='w-[330px] h-[280px] md:w-full md:h-full md:scale-75 lg:scale-100' src={bannerFeature3} alt="features" />
                </div>
            </div>

        </div>
    )
}