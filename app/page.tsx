import React from 'react'
import Hero from './components/home/hero'
import HowSetup from './components/home/howSetup'
import WeProvide from './components/home/weProvide'
import IdentifyPrinter from './components/home/identifyPrinter'
import BottomSlider from './components/home/buttomSlider'


function page() {
  return (
    <>
    <Hero />
    <HowSetup/>
    <WeProvide/>
    <IdentifyPrinter />
    <BottomSlider/>
    </>
  )
}

export default page