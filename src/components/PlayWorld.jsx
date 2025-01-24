import React from 'react'
import GildedWorld from '../assets/gif/gilded-platform-gif.gif'
import SideLayer from '../assets/images/png/play-world-side-layer.png'

const PlayWorld = () => {
    return (
        <div className='bg-black lg:pb-28 md:pb-20 pb-18 relative overflow-hidden'>
            <img className='absolute top-1/4 left-0' src={SideLayer} alt="Side layer" />
            <img className='absolute top-1/4 right-0' src={SideLayer} alt="Side layer" />
            <div className="max-w-[1320px] mx-auto max-xl:px-5 relative z-10">
                <div className="flex flex-col justify-center">
                    <h3 className='md:text-5xl sm:text-4xl text-3xl font-bold text-white text-center'>Play To <span className='text-gradient'>Earn</span></h3>
                    <p className='sm:text-xl text-base font-poppins text-light-gray pt-2 sm:pt-4 max-w-[1024px] text-center mx-auto'>Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!</p>
                </div>
                <div className='bg-play-to-earn relative z-20 max-w-[1320px] w-full rounded-[13px] p-[5px] max-md:p-[3px] mx-auto mt-12 max-lg:mt-10 max-md:mt-8 max-sm:mt-6 '>
                    <img className='w-full max-h-[551px] rounded-[13px] object-cover' src={GildedWorld} alt="Play world" />
                </div>
            </div>
        </div>
    )
}

export default PlayWorld