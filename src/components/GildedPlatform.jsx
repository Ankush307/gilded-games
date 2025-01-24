import React from 'react'
import { CloseQuotes, OpenQuotes } from '../utils/icons'

const GildedPlatform = () => {
    return (
        <div className='bg-platform-img bg-no-repeat bg-cover bg-center mt-[-1px]'>
            <div className='max-w-[972px] px-4 mx-auto relative pt-[229px] py-[228px] max-lg:py-[200px] max-md:py-[160px] max-sm:py-[100px]'>
                <p className='text-[40px] max-lg:text-3xl max-sm:text-2xl max-sm:leading-9 max-lg:leading-11 leading-[62.4px] max-w-[940px] mx-auto text-center text-white relative'><span className='absolute -left-[78px] -top-[61px] max-lg:-top-[48px] max-lg:-left-8'><OpenQuotes myClass="max-lg:h-12" /></span>
                    Gilded Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the game!
                    <span className='absolute right-[19%] max-lg:-bottom-8'><CloseQuotes myClass="max-lg:h-12" /></span></p>
            </div>
        </div>
    )
}

export default GildedPlatform