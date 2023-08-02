import BtnDowload from '../Atoms/BtnDowload'
import './style.scss'

export default function HeroBanner() {
    return (
        <div className='hero-banner-container md:flex mt-8 md:mt-20 md:mb-[160px]'>

            {/* Block Title */}
            <div className='md:w-7/12 md:mt-[60px]'>
                {/* Animate Title */}
                <div className='block-title flex'>
                    <p className='text-3xl md:text-6xl'>Creating</p>
                    <p className='text-3xl md:text-6xl text-pink font-extrabold ml-4'>AI AVATAR</p>
                </div>
                <p className='text-3xl md:text-6xl mt-2.5'>with <span className='font-bold'>Venus AI</span></p>
                <p className='text-base md:text-xl mt-5'>It&apos;s never been simpler or enjoyable to get ready for
                    the breathtaking AI artworks with us.
                </p>

                {/* Button Download */}
                <div className='flex md:mt-[50px] md:gap-x-6'>
                    <div className='w-fit'>
                        <BtnDowload type='apple' />
                    </div>
                    <div className='w-fit'>
                        <BtnDowload type='android' />
                    </div>
                </div>

                {/* Mouse scroll */}
                <div className='md:mt-[120px] flex items-center'>
                    <div className="w-fit">
                        <div className="mouse-icon">
                            <div className="wheel" />
                        </div>
                    </div>
                    <p className='ml-3 text-sm'>Scroll to Explore</p>
                </div>
            </div>

            {/* Banner Slider */}
            <div className='md:w-5/12'>
                <p>Banner nè</p>
            </div>
        </div>
    )
}
