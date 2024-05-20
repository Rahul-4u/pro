import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import About from '../about/About'

export default function Home() {
  return (
   <div className=' bg-[url(/bg-1.jpg)] w-full'>
       <div className='w-full container md:py-5   text-slate-100  '>
     <div className='container mdl:flex flex md:flex-row items-center  flex-col-reverse justify-between py-5 items-center'>
     <HomeLeft/>
      <HomeRight/>
      
      
  
     </div>
    </div>
    <About/>
   </div>
  )
}
