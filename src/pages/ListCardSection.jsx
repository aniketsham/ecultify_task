import React from 'react'
import placeholder from "../images/placeholder.png"

const ListCardSection = () => {
  return (
    <div>
        <div className='md:p-10 '>
    <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-center sm:text-left text-gray-900 md:text-lg lg:text-3xl">Heading</h1>
    <p className="text-lg font-normal text-gray-500 lg:text-3xl text-center sm:text-left ">Sub heading</p>
    <div className=' grid grid-cols-1 gap-y-5 pt-20'>

      <div className="flex flex-col p-8   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={placeholder} alt=""/>
    <div className="flex flex-col px-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Title</h5>
        <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
        <button type="button" className=" bg-gray-100 w-auto self-start border-2 border-gray-500  hover:text-gray-100 hover:bg-gray-500  rounded-lg text-sm px-4 py-2 text-center">Button</button>

    </div>

    </div>

    <div className="flex flex-col p-8   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={placeholder} alt=""/>
    <div className="flex flex-col px-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
        <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
        <button type="button" className=" bg-gray-100 w-auto self-start border-2 border-gray-500  hover:text-gray-100 hover:bg-gray-500 rounded-lg text-sm px-4 py-2 text-center">Button</button>

    </div>
    </div>

    <div className="flex flex-col p-8   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={placeholder} alt=""/>
    <div className="flex flex-col px-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
        <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
        <button type="button" className=" bg-gray-100 w-auto self-start border-2 border-gray-500  hover:text-gray-100 hover:bg-gray-500 rounded-lg text-sm px-4 py-2 text-center">Button</button>

    </div>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default ListCardSection
