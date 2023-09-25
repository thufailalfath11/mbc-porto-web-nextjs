import ParticklesBG from '@/common/ParticklesBG/ParticklesBG'
import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import Profile from '@/components/Profile/page'

import React from 'react'

const tentang = () => {
  return (
    <div>
    <div className="w-full h-screen absolute top-0 left-0 z-0">
      <ParticklesBG />
    </div>
      <div className="container">
        <Navbar />
        <Profile/>
        <Footer />
    
    </div>
  </div>
  )
}

export default tentang