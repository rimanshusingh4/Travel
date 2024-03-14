import React from 'react'

function Destinations() {
  return (
    <>
        <div className='w-full h-screen bg-center bg-cover bg-[url("https://images.unsplash.com/36/rv1BIw0tSKi0xLtGrpR0_TE3_0185.jpg?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] flex flex-col'>
            <div className='h-1/3 w-full mt-10 flex'>
                <div className='flex justify-start font-bold text-[65px] items-center w-2/3 h-full text-yellow-400'>
                    <h1 className='ml-16'>DISC<i className='text-white'>O</i>VER POPU<i className='text-white'>L</i>AR DESTINATI<i className='text-white'>O</i>NS</h1>
                </div>
                <div className='w-1/3 relative flex justify-center items-center'>
                    <img className='w-60  absolute right-20  rounded-full shadow-2xl origin-center rotate-12' src='https://images.unsplash.com/photo-1644647840725-5218072147b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Fea'/>
                    <img className='w-60 absolute left-1 rounded-full shadow-2xl origin-top-left -rotate-12' src='https://st2.depositphotos.com/3837271/5507/i/450/depositphotos_55072853-stock-photo-time-to-travel-wooden-sign.jpg' alt='Fea1'/>
                </div>
            </div>
            <div className='h-1/2 w-full mt-10 flex flex-wrap justify-around'>
                <div className='relative w-1/5 h-80 shadow-2xl rounded-[35px] overflow-hidden flex'>
                    <img className='absolute w-full h-full' src='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww' alt='first'/>
                    <h1 className='absolute z-10 text-white text-2xl font-bold top-60 left-16'>Hello Chakarata </h1>
                    <div className='absolute z-10 bottom-5 gap-x-20 text-white flex justify-around'>
                        <div>Uttarakhand</div>
                        <div>6000</div>
                    </div>
                </div>
                <div className='relative w-1/5 h-80 shadow-2xl rounded-[35px] overflow-hidden flex'>
                    <img className='absolute w-full h-full' src='https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='first'/>
                    <h1 className='absolute z-10 text-white text-2xl font-bold top-60 left-16'>Hello Chakarata </h1>
                    <div className='absolute z-10 bottom-5 gap-x-20 text-white flex justify-around'>
                        <div>Uttarakhand</div>
                        <div>6000</div>
                    </div>
                </div>
                <div className='relative w-1/5 h-80 shadow-2xl rounded-[35px] overflow-hidden flex'>
                    <img className='absolute w-full h-full' src='https://images.unsplash.com/photo-1573097637683-58e6462d2902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyaXB8ZW58MHx8MHx8fDA%3D' alt='first'/>
                    <h1 className='absolute z-10 text-white text-2xl font-bold top-60 left-16'>Hello Chakarata </h1>
                    <div className='absolute z-10 bottom-5 gap-x-20 text-white flex justify-around'>
                        <div>Uttarakhand</div>
                        <div>6000</div>
                    </div>
                </div>
                <div className='relative w-1/5 h-80 shadow-2xl rounded-[35px] overflow-hidden flex'>
                    <img className='absolute w-full h-full' src='https://images.unsplash.com/photo-1606175063459-796dce40e3aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWtpbmd8ZW58MHx8MHx8fDA%3D' alt='first'/>
                    <h1 className='absolute z-10 text-white text-2xl font-bold top-60 left-16'>Hello Chakarata </h1>
                    <div className='absolute z-10 bottom-5 gap-x-20 text-white flex justify-around'>
                        <div>Uttarakhand</div>
                        <div>6000</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Destinations