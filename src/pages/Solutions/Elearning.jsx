import React from 'react'

//components
import Hero from '../../components/Hero'
import SolutionsCommon from '../../components/SolutionsCommon'

//data
import { eLearningObj } from '../../data/solutions/solutions'
import Footer from '../../components/Footer'

const ELearning = () => {
  return (
    <div>
      {/* <Hero heading={eLearningObj.title} bgImage={eLearningObj.src} content={eLearningObj.description}/> */}
      <SolutionsCommon obj={eLearningObj} />
      {/* <Footer /> */}
    </div>
  )
}

export default ELearning