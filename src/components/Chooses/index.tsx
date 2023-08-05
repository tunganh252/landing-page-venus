import bannerChoose1 from "@assets/img/banner_choose1.png"
import bannerChoose2 from "@assets/img/banner_choose2.png"
import bannerChoose3 from "@assets/img/banner_choose3.png"
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export default function Chooses() {
    return (
        <div id='whyChooseUs' className='features-container pt-10 lg:pt-[180px]'>
            <p className='text-2xl lg:text-4xl xl:text-5xl font-bold'>WHY CHOOSE US</p>

            <div className='mt-10  lg:mt-[60px] md:flex justify-between md:gap-x-4 lg:gap-x-8'>
                <ChooseComp srcImg={bannerChoose1}>
                    <p className='text-lg xl:text-xl font-bold'>VGEM provides the full creative experience for you</p>
                    <p className='mt-6 text-sm'>Various VGEM packages that you can explore and enjoy to create your AI artwork unlimited.</p>
                </ChooseComp>

                <ChooseComp srcImg={bannerChoose2} >
                    <p className='text-lg xl:text-xl font-bold'>Follow and like your talented artists on our platform</p>
                    <p className='mt-6 text-sm'>You can follow and like your talented artists, and see their latest works, never miss  from your favorite artists.</p>
                </ChooseComp>

                <ChooseComp srcImg={bannerChoose3} >
                    <p className='text-lg xl:text-xl font-bold'>Publish your artwork and connect with community</p>
                    <p className='mt-6 text-sm'>Our community is a place where you can publish and share your artwork with people who appreciate it. </p>
                </ChooseComp>
            </div>
        </div>
    )
}

interface ChooseCompProps {
    srcImg: StaticImageData;
    children?: ReactNode;
}

const ChooseComp = ({ srcImg, children }: ChooseCompProps) => {
    return (
        <div className='mt-10 rounded-[20px] bg-n90 lg:w-[392px]'>
            <div className='w-full flex justify-center'>
                <Image className="w-full" src={srcImg} alt="icon" loading='lazy' />
            </div>

            <div className='w-full p-6 lg:p-8'>
                {children}
            </div>
        </div>
    )
}