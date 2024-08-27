import React from 'react'
import './App.css'
import { Footer,Features,Header,Possibility,WhatGpt3,Blog } from './container'
import {Articles,Brand,Navbar,CTA} from './componenets'
const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />

    </div>
    <Brand />
    <WhatGpt3/>
    <Features/>
    <Possibility/>
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}

export default App
