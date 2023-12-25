"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 text-center m:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200'>
                    Hello, I am {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Aditi',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Software Development Engineer',
                            1000,
                            'Backend Developer',
                            1000,
                            'Web Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    /> 
                    
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                    As a passionate Software Developer, I am driven by a relentless curiosity for technology and a strong desire to excel. My thirst for knowledge motivates me to continuously explore new concepts and embrace the latest innovations in software development. Challenges invigorate me, and I leverage them as opportunities to expand my expertise and deliver exceptional results.

                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>                    
                    </button>

                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                    src="/images/my-photo.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                    layout="fill"
                    objectFit="cover"
                />
                </div>
            </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection;