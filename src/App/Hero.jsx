import React from 'react'
import student from '../Image/student.png'

const Hero = () => {
  return (
    <div>
      <article className='flex p-20 justify-between max-sm:flex max-sm:flex-col max-sm:p-7 max-sm:gap-6'>
        <section className='w-[36vw] text-left flex flex-col gap-10 max-sm:w-[90vw] max-sm:text-center max-sm:gap-4'>
          <div>
            <h1 className='text-[35px] w-[30vw] max-sm:w-[90vw] max-sm:text-[25px] max-sm:text-center'>We have the best educational system </h1>
          </div>
          <div>
            <p className='text-[18px] text-zinc-600'>At p-tech primary school we are dedicated to providing nurturing and supportive environment where you children can grow, learn and thrive.</p>
          </div>
          <div>
            <button className='bg-yellow-700 text-white p-2 w-[10vw] max-sm:w-[30vw] rounded-lg shadow-lg'>Enroll now</button>
          </div>
        </section>
        
        <section>
          <img className='w-[30vw] max-sm:w-[90vw]' src={student} alt="" />
        </section>
      </article>
    </div>
  )
}

export default Hero
