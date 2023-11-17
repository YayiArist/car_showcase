"use client"
import Image from 'next/image'
import { CustomButton } from '.'


export default function Hero() {
const handleScroll= ()=>{

}

  return (
    <div className='hero'>
     <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book or rent a Car -- quickly and easily</h1>

        <p className='her__subtitle'>
           Streamline your car rental experience with our affortless booking process 
        </p>

        <CustomButton
        
        title="Explore Cars"
        containerStyles="bg-primary-blue
        text-white rounded-full mt-10"
        handleClick={handleScroll}/>
     </div>
    <div className='hero__image-container'>
        <div className='hero__image'>
            {/* <Image src=/> */}
        </div>
    </div>

    </div>
  )
}
