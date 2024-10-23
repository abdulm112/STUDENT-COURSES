import React from 'react'

const Course = () => {
  const pictures =[
    {
       id: 1,
       name: "English language Mathematics social studies",
       button: "Learn More"
    },
    {
      id: 2,
      name: "Art and design Physical Education forign language music",
      button: "Learn More"
    },
    {
      id: 3,
      name: "sport teams music and drama Debate team School newspaper",
      button: "Learn More" 
    }
  ]
  return (
    <div>
      <section className='flex flex-col gap-20 p-10 max-sm:gap-6'>
        <article>
            <h1 className='text-[30px]'>COURSES</h1>
        </article>
        <article className='flex justify-around max-sm:flex max-sm:flex-col gap-10'>
          {pictures.map((picture) => (
             <legend key={picture.id} className=' border-yellow-700 border-solid border-2 flex flex-col items-center gap-[30px] p-10 rounded-3xl shadow-lg h-[40vh] max-sm:gap-2 max-sm:h-[36vh]'>
            <div>
            <p className='w-[10vw] h-[18vh] max-sm:w-[33vw]'>{picture.name}</p>
            </div>
            <div>
                <button className=' border-yellow-700 border-solid border-2 p-1 w-[9vw] rounded-lg max-sm:w-[40vw]'>{picture.button}</button>
            </div>
            </legend>
          ))}
        </article>
      </section>
    </div>
  )
}

export default Course
