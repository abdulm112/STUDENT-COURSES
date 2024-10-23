import React, { useState } from 'react'
import logo from '../Image/1-removebg-preview 1.svg'
import burger from '../Image/menu.png'


const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
    return (
        <div>
            <section className='bg-yellow-700 text-white flex items-center justify-between p-2 px-10 max-sm:px-4 max-sm:text-black'>
                <div>
                    <img className='w-[5vw] max-sm:w-[18vw]' draggable={false} src={logo} alt="" />
                </div>
                <div className={`${isopen ? "block": "hidden"} lg:flex lg:items-center lg:gap-52 max-sm:rounded-b-[30px] max-sm:flex-col max-sm:absolute max-sm:top-24 max-sm:bg-white max-sm:shadow-lg max-sm:right-0 max-sm:left-0 p-4`}>
                    <ul className='flex gap-10 max-sm:flex-col max-sm:gap-4 cursor-pointer max-sm:pb-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                    <button className='border-white border-2 outline-none border-solid p-2 w-40 rounded-lg max-sm:border-yellow-700 max-sm:border-2 max-sm:border-solid'>Register Now</button>
                </div>
                <img className='hidden max-sm:block w-[5vw] max-sm:w-[12vw]' src={burger} draggable={false} onClick={() => setIsopen(!isopen)} alt="" />
            </section>
        </div>
    )
}

export default Navbar
