import React from 'react'
import Idea from '../assets/idea.png'
import Ballon from '../assets/ballon.png'
import Location from '../assets/location.png'
function Features() {
  return (
    <>
    <div className='h-screen w-full  relative bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <div className='absolute h-screen w-full  bg-black opacity-35'></div>
        <div className='h-16'></div>
        <div className=' w-full h-1/3 flex justify-around items-center '>
            <div className='w-2/3 relative flex justify-center items-center gap-10' >
              <img className='h-52 w-52 left-28 absolute overflow-hidden rounded-2xl' src='https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='features'/>
              <h1 className='text-[90px] text-white font-emibold absolute left-52'>THE <i className='text-yellow-300 '>ART</i> OF <br/><i className='text-yellow-300'>TAILORED</i> TRAVEL</h1>
            </div>
            <div className='w-1/3 relative flex justify-center items-center'>
                <img className='w-52  absolute left-40 rounded-full shadow-2xl origin-center -rotate-12' src='https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D' alt='Fea'/>
                <img className=' w-52 absolute left-1 rounded-full shadow-2xl origin-top-left rotate-12' src='https://images.unsplash.com/photo-1505832018823-50331d70d237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D' alt='Fea1'/>
            </div>
        </div>
        {/* 1 */}
        <div className='h-52 w-full mt-36 flex flex-wrap justify-around opacity-65 text-white'>
          <div className='h-full w-1/4 rounded-3xl bg-black'>
            <div className='h-1/2 flex justify-center items-center'>
              <img className='h-20 w-20' src={Idea} alt='svg'/>
              <h1 className='text-2xl font-semibold'>Our Airline flies greener</h1>
            </div>
            <div className='h-1/2 text-lg font-light text-center'>
              <h1>In publishing and Graphic Design, Lorem ipsum is placeholder text commonly used to demonstrate the visuals.</h1>
            </div>
          </div>
          {/* 2 */}
          <div className='h-full w-1/4 rounded-3xl bg-black'>
            <div className='h-1/2 flex justify-center items-center'>
              <img className='h-20 w-20' src={Ballon} alt='svg'/>
              <h1 className='text-2xl font-bold'>Our Airline flies greener</h1>
            </div>
            <div className='h-1/2 text-lg font-light text-center'>
              <h1>In publishing and Graphic Design, Lorem ipsum is placeholder text commonly used to demonstrate the visuals.</h1>
            </div>
          </div>
          {/* 3 */}
          <div className='h-full  w-1/4 rounded-3xl bg-black'>
            <div className='h-1/2 flex justify-center items-center'>
              <img className='h-20 w-20' src={Location} alt='svg'/>
              <h1 className='text-2xl font-semibold text-white'>Our Airline flies greener</h1>
            </div>
            <div className='h-1/2 text-lg font-light text-center'>
              <h1>In publishing and Graphic Design, Lorem ipsum is placeholder text commonly used to demonstrate the visuals.</h1>
            </div>
          </div>
        </div>
    </div>
    </>

  )
}

export default Features