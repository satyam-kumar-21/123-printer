import React from 'react'
import HpSmartInstallHero from './hpSmartInstallHero'
import HpSmartInstallHero2 from './hpSmartInstallHero2';
import BottomSlider from '../components/home/buttomSlider';
import HpSmartInstallWeProvide from './hpSmartInstallWeProvide';
import HpSmartInstallFooter from './hpSmartInstallFooter';

function page() {
  return (
   <>
   <HpSmartInstallHero />
   <HpSmartInstallHero2 />
   <HpSmartInstallWeProvide />
   <BottomSlider/>

   <HpSmartInstallFooter />
   </>
  )
}

export default page