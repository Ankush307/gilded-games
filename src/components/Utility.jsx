import React from 'react'
import CartoonImg from '../assets/images/webp/utility-cartoon.webp'

const Utility = () => {
    return (
        <div className='bg-utility-img lg:pt-[105px] lg:pb-48 md:pb-24 mt-[-1px]'>
            <div className="max-w-[1200px] mx-auto max-xl:px-5">
                <div className="flex max-lg:flex-wrap max-lg:gap-10 max-sm:gap-5 justify-center lg:justify-between">
                    <div className="flex flex-col justify-center">
                        <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold max-lg:text-center text-white'><span className='bg-gradient-to-r from-[#7f5dc9] to-[#5b79dc] bg-clip-text text-transparent'>NFT</span> Utility</h3>
                        <p className='sm:text-xl text-base font-poppins text-light-gray max-lg:text-center max-lg:max-w-[700px] max-lg:mx-auto pt-2 sm:pt-4 max-w-[649px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='max-w-[442px] md:h-[638px] h-fit w-full' src={CartoonImg} alt="cartoon img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility