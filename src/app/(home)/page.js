import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Member from '@/components/Member'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Navbar/>
        <section
        className="bg-gradient-to-r from-rose-100 to-teal-100 h-auto p-6 w-full"
        >
        <Intro />
        <About />
        <Member/>
        <Contact/>
        <Footer/>
        </section>
    </main>
  )
}
