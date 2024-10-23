import React from 'react'

const Contact = () => {
  return (
    <div>
      <article className='bg-yellow-700 flex flex-col gap-14 p-10 text-left items-center max-sm:gap-8 max-sm:p-6 max-sm:text-center'>
        <section>
            <h1 className='text-[30px] text-white'>Contact Us</h1>
        </section>
        
        <section className='flex flex-col gap-4'>
            <div>
                <input className='border-white border-2 border-solid bg-yellow-700 outline-none w-[30vw] p-2 text-white rounded-lg placeholder:text-white max-sm:w-[90vw] max-sm:p-3' type="text" placeholder='Name' />
            </div>
            <div>
                <input className='border-white border-2 border-solid bg-yellow-700 outline-none w-[30vw] p-2 text-white rounded-lg placeholder:text-white max-sm:w-[90vw] max-sm:p-3' type="emai" placeholder='Email' />
            </div>
            <div>
                <textarea className='text-white bg-yellow-700 border-white border-2 border-solid outline-none w-[30vw] p-2 h-[30vh] rounded-lg placeholder:text-white max-sm:w-[90vw] max-sm:p-3' name="" placeholder='Message' id=""></textarea>
            </div>
            <div>
                <button className='bg-yellow-700 w-[8vw] p-1 rounded-lg text-white text-[19px] border-white border-2 border-solid max-sm:w-[22vw]'>Send</button>
            </div>
        </section>
      </article>
    </div>
  )
}

export default Contact
