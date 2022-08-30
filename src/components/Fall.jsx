import React from 'react'

import doIt from "../assets/images/nike-just-do-it.jpg";
import justDoIt2 from "../assets/images/jusDoIt2.webp";

const Fall = () => {
    return (
        <div className='flex justify-center '>
            <div className='p-4  w-[1400px]'>
                <h3 className='text-start text-primary my-8 font-sans font-normal text-2xl laptop:ml-[5%] desktop:ml-[6%]'>Fall's Coming</h3>
                <div className="flex items-center justify-center flex-wrap gap-2 laptop:gap-3">
                    <figure className='relative bg-green-200 '>
                        <img src={doIt} alt="figure" className='object-cover desktop:w-[600px] ' />
                        <figcaption className='absolute  bottom-10 left-8'>
                            <p className='mb-5 text-white text-xl font-sans'>Gear Up</p>
                            <button className='bg-white px-7 py-2 rounded-3xl'>Shop</button>
                        </figcaption>
                    </figure>
                    <figure className='relative '>
                        <img src={justDoIt2} alt="justDoIt2 " className='desktop:w-[600px]' />
                        <figcaption className='absolute  bottom-10 left-8'>
                            <p className='mb-5 text-white text-xl font-sans'>Gear Up</p>
                            <button className='bg-white px-7 py-2 rounded-3xl'>Shop</button>
                        </figcaption>
                    </figure>

                </div>
            </div>
        </div >
    )
}

export default Fall
