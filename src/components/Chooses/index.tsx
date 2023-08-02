import bannerChoose1 from "@assets/img/banner_choose1.png"
import bannerChoose2 from "@assets/img/banner_choose2.png"
import bannerChoose3 from "@assets/img/banner_choose3.png"
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export default function Chooses() {
    return (
        <div className='features-container md:mt-[80px] pb-[80px]'>
            <p className='text-2xl md:text-5xl font-bold'>WHY CHOOSE US</p>

            <div className='mt-[60px] flex justify-between md:gap-x-8'>
                <ChooseComp srcImg={bannerChoose1}>
                    <div className='text-xl font-bold'>VGEM provides the full creative experience for you</div>
                    <div className='mt-6'>Various VGEM packages that you can explore and enjoy to create your AI artwork unlimited.</div>
                </ChooseComp>

                <ChooseComp srcImg={bannerChoose2} >
                    <div className='text-xl font-bold'>Follow and like your talented artists on our platform</div>
                    <div className='mt-6'>You can follow and like your talented artists, and see their latest works, never miss  from your favorite artists.</div>
                </ChooseComp>

                <ChooseComp srcImg={bannerChoose3} >
                    <div className='text-xl font-bold'>Publish your artwork and connect with community</div>
                    <div className='mt-6'>Our community is a place where you can publish and share your artwork with people who appreciate it. </div>
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
        <div className='mt-10 rounded-[20px] bg-n90 md:w-[392px]'>
            <div className='w-fit'>
                <Image src={srcImg} alt="icon" objectFit="contain" />
            </div>

            <div className='w-full p-8'>
                {children}
            </div>
        </div>
    )
}