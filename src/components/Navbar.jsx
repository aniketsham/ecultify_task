import React,{useState} from 'react'
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Figma from "../images/figma.png"
const Navbar = () => {
  let Links =[
    {name:"Product",link:"/"},
    {name:"Solutions",link:"/"},
    {name:"Community",link:"/"},
    {name:"Resource",link:"/"},
    {name:"Pricing",link:"/"},
    {name:"Contact",link:"/"},

  ];
  let [open, setOpen] =useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center  justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img src={Figma} className="h-8" alt="Figma Logo" />
            </div>

            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white md:z-auto z-[-1] absolute md:static  left-0 w-full md:w-auto md:pl-0  pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7  '>
                        <a href={link.link} className='text-gray-800 '>{link.name}</a>
                    </li>))
                }
                <li className='md:ml-8 md:my-0 my-7'>
                <button type="button" className=" bg-gray-300 border-2 border-gray-500  focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign in</button>

                </li>
                <li className='md:ml-8 md:my-0 my-7'>
                <button type="button" class="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:outline-2 hover:text-gray-800 hover:bg-gray-100 ">Register</button>
                </li>
            </ul>
            {/* button */}
           </div>
        </div>
  )
}

export default Navbar
