import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import Tentang from '@/components/Tentang/Tentang'
import React from 'react'

const tentang = () => {
  return (
    <div className='container'>
    <Navbar/>
    <Tentang/>
    <Footer/>
    </div>
  )
}

export default tentang