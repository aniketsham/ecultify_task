import React from 'react'
import placeholder from "../images/placeholder.png"
const CardSection = () => {
  return (
    <div className='md:p-10 '>
    <h1 class=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center sm:text-left md:text-lg lg:text-3xl">Heading</h1>
    <p class="text-lg font-normal text-gray-500 lg:text-3xl text-center sm:text-left dark:text-gray-400">Sub heading</p>

    
    <div className='flex items-center w-full md:pt-20 '>
    
      <div className='grid grid-cols-1 md:grid-cols-3 pt-2 md:gap-x-20 md:gap-y-10'>
        <div class="max-w-lg bg-white border border-gray-200 rounded-lg ">

            <img class="rounded-t-lg p-2" src={placeholder} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Text</h5>
                <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
        </div>
        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
            <img class="rounded-t-lg p-2" src={placeholder} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Text</h5>
                <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
        </div>
        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
            <img class="rounded-t-lg p-2" src={placeholder} alt="" />
            <div className="p-5">            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Text</h5>
            <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
        </div>
        </div>
        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
            <img class="rounded-t-lg p-2" src={placeholder} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Text</h5>
                <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
        </div>
        </div>
        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
            <img class="rounded-t-lg p-2" src={placeholder} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Text</h5>
                <p className="mb-3 font-normal text-gray-700 ">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
        </div>

        </div>



      </div>
    </div>
  

  )
}

export default CardSection
