import React from 'react'
import FirstComponent from '../components/firsthomecmpnt'
import SecondComponent from '../components/secondhomecmpnt'
import ThirdComponent from '../components/thirdhomecmpnt'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="w-[100%]  h-full sm:w-screen sm:h-screen bg-white">
      <FirstComponent  />
      <SecondComponent />
      <ThirdComponent  />
      <Footer />
    </div>
  )
}

export default Home