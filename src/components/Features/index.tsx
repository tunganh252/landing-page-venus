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
        <div className='features-container md:mt-[80px] pb-[100px]'>
            <p className='text-2xl md:text-5xl font-bold'>FEATURES</p>

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
        <div className='mt-10 flex rounded-[30px] bg-black p-[60px] md:gap-x-[93px]'>
            <div className='w-7/12'>
                <Image src={bannerFeature1} alt="features" objectFit="contain" />
            </div>

            <div className='mt-[60px] w-5/12'>
                <div className='w-fit'>
                    <Image src={iconFeature1} alt="icon" objectFit="contain" />
                </div>

                <div className='mt-10'>
                    <p className='md:text-4xl'>
                        Enjoy making
                    </p>
                    <p className='md:text-4xl mt-2'>
                        stunning and unique
                    </p>
                    <p className='md:text-4xl mt-2 font-bold'>
                        AI Avatar
                    </p>
                </div>

                <p className='text-lg mt-6 w-full'>
                    With the help of our AI system to produce high-quality avatars with a variety of packages, making it easy for you to select.
                </p>

            </div>
        </div>
    )
}
const Feature2 = () => {
    return (
        <div className='mt-10 flex rounded-[30px] bg-black p-[60px] '>
            <div className='mt-[60px] w-5/12'>
                <div className='w-fit'>
                    <Image src={iconFeature2} alt="icon" objectFit="contain" />
                </div>

                <div className='mt-10'>
                    <p className='md:text-4xl'>
                        Create <span className='font-bold'>AI Art </span>by entering amusing prompts.
                    </p>
                </div>

                <p className='text-lg mt-6 w-full pr-24'>
                    Unleash your creativity and imagination with AI Art. Just enter a few words and watch the AI transform them into amazing artworks.
                </p>

            </div>

            <div className='w-7/12 mt-[-4rem] pl-10'>
                <Image src={bannerFeature2} alt="features" objectFit="cover" />
            </div>
        </div>
    )
}


const Feature3 = () => {
    return (
        <div className='mt-10 flex rounded-[30px] bg-black p-[60px] md:gap-x-[93px]'>
            <div className='w-7/12 relative'>
                <Image src={bannerFeature3} alt="features" objectFit="contain" />

                <div className='absolute bottom-10 left-0'>
                    <Image src={bannerFeature4} alt="features" objectFit="contain" />
                </div>
            </div>

            <div className='mt-[170px] w-5/12'>
                <div className='w-fit'>
                    <Image src={iconFeature3} alt="icon" objectFit="contain" />
                </div>

                <div className='mt-10'>
                    <p className='md:text-4xl'>
                        Produce creative and remarkable <span className='font-bold'>AI Videos</span>
                    </p>
                </div>

                <p className='text-lg mt-6 w-full'>
                    You can use tinning effects, editing timeline, and adding styles as the best way to generate AI animation that are truly yours.
                </p>

            </div>
        </div>
    )
}