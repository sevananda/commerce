import Index from '@/components/Sidebar'
import Navbar from '@/components/navbar'
import React, { Children, ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div>
     
    <div className="bg-white  fixed">
      <Navbar />
      
      <div className="flex flex-row">
       
        <Index />
        <div className="text-stone-950 p-10"> 
         {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Layout