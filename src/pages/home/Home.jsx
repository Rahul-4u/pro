import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

export default function Home() {
  return (
   <div className=' bg-slate-600 w-full'>
       <div className='w-full container md:py-5   text-slate-100  '>
     <div className='container mdl:flex flex md:flex-row items-center  flex-col-reverse justify-between items-center'>
     <HomeLeft/>
      <HomeRight/>
     </div>
    </div>
   </div>
  )
}
