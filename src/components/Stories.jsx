import React from 'react'
import Test from './Test'

function Stories() {
  return (
    <>
        <div className='w-full h-screen bg-cover bg-center bg-[url("https://wallpaperaccess.com/full/5099398.jpg")]'>
                <div className='h-20'></div>
                <div className=' w-full border h-1/3 flex justify-start  '>
                    <div className='w-2/3 relative flex justify-center items-center gap-10' >
                        <img className='w-72 h-72 left-28 absolute overflow-hidden rounded-2xl' src='https://images.pexels.com/photos/1148733/pexels-photo-1148733.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='features'/>
                        <h1 className='text-[90px] text-white font-emibold absolute left-64'><i className='text-yellow-300 '>Our</i> TRAVEL <br/><i className='text-yellow-300'>Stories</i></h1>
                    </div>
                </div>
                <div className='w-full border-5'>
                    <Test/>
                </div>
        </div>
    </>
  )
}

export default Stories