import React from 'react'
import membership from '../assets/images/member.webp'
import membershipMobile from '../assets/images/membership-mobile.webp'

const Membership = () => {
    return (
        <div className='p-4  laptop:px-[5%] desktop:px-[7%]'>
            <h3 className='text-start font-sans text-2xl my-7'>Nike Membership</h3>
            <div>
                <figure className='relative tablet:hidden'>
                    <img className='' src={membershipMobile} alt="membership" />
                    <figcaption className='absolute bottom-20 flex flex-col items-start ml-4' >
                        <p className='text-white text-5xl font-extrabold text-start tracking-tighter'>Become A<br /> Member</p>
                        <p className='text-white font-sans mt-2'>Sign up for free. Join the community.</p>
                        <button className=' bg-white px-6 py-2 rounded-3xl mt-4'>Join Us</button>
                    </figcaption>
                </figure>
                <figure className='relative hidden tablet:block'>
                    <img className='' src={membership} alt="membership" />
                    <figcaption className='absolute top-6 tablet:top-1 tablet:left-2 laptop:mt-6 laptop:left-6  flex flex-col items-start'>
                        <p className='text-white text-5xl tablet:text-xl font-extrabold text-start tracking-tighter laptop:text-5xl'>Become A<br /> Member</p>
                        <p className='text-white font-sans mt-2 tablet:mt-0'>Sign up for free. Join the community.</p>
                        <button className=' hover:bg-secondary bg-white px-6 py-2 rounded-3xl mt-4 tablet:mt-2 tablet:py-1 tablet:px-3 tablet:text-sm laptop:px-6 laptop:py-2 laptop:mt-4 '>Join Us</button>

                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Membership
