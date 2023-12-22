import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='w-full h-[100vh] flex justify-center'>
        <div className='w-[70%]'>
          <div className='flex flex-row justify-between m-11 border-b-2 border-green-950'>

            <div className='text-xl font-poppins text-title tracking-wider transform transition-all duration-300 ease-in-out relative inline-block hover:text-upperline hover:cursor-pointer'>
              aditimishra
            </div>

            <div className='flex flex-row justify-between w-[35%]'>
              <span className='text-xl font-poppins text-title tracking-wider transform transition-all duration-300 ease-in-out relative inline-block hover:text-upperline hover:border-t-4 hover:cursor-pointer'>Blogs</span>
              <span className='text-xl font-poppins text-title tracking-wider transform transition-all duration-300 ease-in-out relative inline-block hover:text-upperline hover:border-t-4 hover:cursor-pointer'>Projects</span>
              <span className='text-xl font-poppins text-title tracking-wider transform transition-all duration-300 ease-in-out relative inline-block hover:text-upperline hover:border-t-4 hover:cursor-pointer'>Contact</span>
            </div>
          </div>
          <div className='flex justify-start border border-red-500'>
            body
          </div>
        </div>
      </div>
    </>
  )
}
