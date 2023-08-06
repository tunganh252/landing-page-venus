"use client"
import { LINK_VIDEO_FEATURE } from "@/assets/utils/constant"
import useWindowSize from "@/assets/utils/hooks/useWindowSize"
import bannerFeature1 from "@assets/img/banner_feature1.png"
import bannerFeature2_1 from "@assets/img/banner_feature2-1.png"
import bannerFeature2_2 from "@assets/img/banner_feature2-2.png"
import bannerFeature3 from "@assets/img/banner_feature3.png"
import bannerFeature4 from "@assets/img/banner_feature4.png"
import iconFeature1 from "@assets/img/icon_feature1.png"
import iconFeature2 from "@assets/img/icon_feature2.png"
import iconFeature3 from "@assets/img/icon_feature3.png"
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Features() {
    return (
        <div id='features' className='features-container pt-16 lg:pt-60'>
            <p className='text-2xl lg:text-4xl xl:text-5xl font-bold'>FEATURES</p>
            <Feature1 />
            <Feature2 />
            <Feature3 />
        </div>
    )
}

const Feature1 = () => {
    return (
        <div>
            {/* Desktop */}
            <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] lg:gap-x-[93px]'>
                <div className='w-6/12'>
                    <Image src={bannerFeature1} alt="features" loading='lazy' />
                </div>
                <div className='mt-6 xl:mt-[60px] w-6/12'>
                    <div className='w-fit'>
                        <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature1} alt="icon" loading='lazy' />
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

            {/* Mobile */}
            <div className='lg:hidden mt-10'>
                <div className='w-fit'>
                    <Image className='w-[55px] h-[55px]' src={iconFeature1} alt="icon" loading='lazy' />
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
                    <Image className='w-[330px] h-[280px] md:w-full md:h-full md:scale-75 lg:scale-100' src={bannerFeature1} alt="features" loading='lazy' />
                </div>
            </div>
        </div>
    )
}

const Feature2 = () => {

    const [valPrompt, setValPrompt] = useState("Cute little rabbit wears pretty dress")

    const handleSubmitPrompt = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submit Prompt");

    }

    return (
        <div>
            {/* Desktop */}
            <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] gap-x-8'>
                <div className='lg:w-5/12 xl:w-6/12 flex items-center'>
                    <div>
                        <div className='w-fit'>
                            <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature2} alt="icon" loading='lazy' />
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
                </div>
                <div className='lg:w-7/12 xl:w-6/12 h-[450px]'>
                    <div className='w-full h-full flex gap-x-3 relative'>
                        <div className='block-prompt bg-white flex items-center rounded-[40px] px-4 py-2 border-2 border-blue absolute lg:top-[10%] xl:top-[5%] 2xl:top-[12%] 3xl:top-[5%] lg:right-[10%] xl:right-[15%] w-[467px]' style={{ boxShadow: "0px 0px 50px 0px rgba(1, 180, 254, 0.80);" }}>
                            <div className='px-6 py-3 flex justify-center items-center rounded-[30px] bg-blue'>
                                <p className='text-black font-bold'>/Prompt</p>
                            </div>
                            <form onSubmit={handleSubmitPrompt} className='w-full'>
                                <input className='ml-4 w-full font-bold' type='text' value={valPrompt} onChange={(e) => setValPrompt(e.target.value)} />
                            </form>
                        </div>

                        <div className='flex items-end'>
                            <Image src={bannerFeature2_1} alt="features" loading="lazy" />
                        </div>
                        <div className='flex items-center'>
                            <Image src={bannerFeature2_2} alt="features" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='lg:hidden mt-10'>
                <div className='w-fit'>
                    <Image className='w-[55px] h-[55px]' src={iconFeature2} alt="icon" loading='lazy' />
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

                <div className='mt-10 h-[250px] md:h-[500px]'>
                    <div className='w-full h-full flex gap-x-3 relative'>


                        <div
                            style={{ boxShadow: "0px 0px 50px 0px rgba(1, 180, 254, 0.80);" }}
                            className='block-prompt bg-white flex items-center rounded-[40px] px-2 py-1 md:px-4 md:py-2 border-1 border-blue absolute top-[0] left-[0] md:top-[10%] w-[260px] md:w-[500px]'>

                            <div className='px-3 py-2.5 md:px-4 md:py-3 flex justify-center items-center rounded-[30px] bg-blue'>
                                <p className='text-black font-bold text-[9px] md:text-base'>/Prompt</p>
                            </div>
                            <input className='ml-2 w-full font-bold text-[9px] md:text-base' type='text' value={valPrompt} onChange={(e) => setValPrompt(e.target.value)} />
                        </div>

                        <div className='w-[155px] md:w-[300px] flex items-end'>
                            <Image src={bannerFeature2_1} alt="features" loading="lazy" />
                        </div>
                        <div className='w-[155px] md:w-[300px] flex items-center'>
                            <Image src={bannerFeature2_2} alt="features" loading="lazy" />
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

const Feature3 = () => {
    const windowSize = useWindowSize()

    return (
        <div>
            {/* Desktop */}
            {
                windowSize.width >= 1024 &&
                <div className='hidden lg:flex mt-10 rounded-[30px] bg-black p-[60px] lg:gap-x-[93px]'>
                    <div className='w-7/12 relative'>
                        {/* Replace */}
                        <ReactPlayer
                            playing controls
                            // url={"/videos/video_feature.mp4"}
                            url={LINK_VIDEO_FEATURE}
                            width="100%"
                            height="100%"
                            light={<Image src={bannerFeature3}
                                alt="Thumbnail"
                                loading='lazy' />}
                        />
                        <div className='absolute bottom-10 left-0'>
                            <Image src={bannerFeature4} alt="features" loading='lazy' />
                        </div>
                    </div>

                    <div className='mt-12 xl:mt-[170px] w-5/12'>
                        <div className='w-fit'>
                            <Image className='w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]' src={iconFeature3} alt="icon" loading='lazy' />
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
            }

            {/* Mobile */}
            {
                windowSize.width < 1024 &&
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
                        <ReactPlayer
                            playing controls
                            // url={"/videos/video_feature.mp4"}
                            url={LINK_VIDEO_FEATURE}
                            width="100%"
                            height="100%"
                            light={<Image src={bannerFeature3}
                                alt="Thumbnail"
                                loading='lazy' />}
                        />
                        <div className='absolute bottom-10 left-0'>
                            <Image src={bannerFeature4} alt="features" loading='lazy' />
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}