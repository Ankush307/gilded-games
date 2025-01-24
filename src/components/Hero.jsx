import React, { useEffect, useState } from 'react'
import { PresaleIcon } from '../utils/icons'
import Header from '../common/Header'

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const targetTime = new Date();
        targetTime.setHours(11, 0, 0, 0);
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-hero-img bg-cover'>
            <Header />
            <div>
                <div className="max-w-[1320px] w-full mx-auto xl:pt-[254px] lg:pt-48 md:pt-32 sm:pt-24 pt-20 xl:pb-32 lg:pb-28 md:pb-24 pb-20 max-xl:px-5">
                    <h1 className='max-w-[1100px] mx-auto text-center font-poppins text-white xl:text-7xl lg:text-6xl md:text-5xl text-4xl lg:mb-5 mb-4 !leading-[127.5%]'>There are games... And then
                        there are <span className='text-[#1BABFE] '>Gilded</span> Games</h1>
                    <div>
                        <p className="text-white text-center text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-5">
                         <span className='text-[#1BABFE] '>{`${timeLeft.days}d :`}</span>   {`  ${timeLeft.hours}hr : ${timeLeft.minutes}min : ${timeLeft.seconds}sec`}
                        </p>
                    </div>
                    <p className='lg:text-lg text-base text-white mx-auto text-center lg:mb-[22px] mb-4'>Remaining Presale Time</p>
                    <div className="flex justify-center gap-[23px]">
                        <button className="md:text-2xl text-xl flex items-center justify-center bg-gradient text-white md:px-[34px] md:py-3.5 px-7 py-2.5 hero-btn rounded-full gap-2.5 duration-300 ease-linear hover:scale-110 cursor-pointer"><PresaleIcon /> Presale</button>
                        <button className="md:text-2xl text-xl flex items-center justify-center text-white md:px-[34px] md:py-3.5 px-7 py-2.5 rounded-full gap-2.5 bg-transparent duration-300 ease-linear border border-white hover:scale-110 cursor-pointer">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero