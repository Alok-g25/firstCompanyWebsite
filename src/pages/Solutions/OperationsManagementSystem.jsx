import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import SolutionsCommon from '../../components/SolutionsCommon'
import { operationsManagementObj } from '../../data/solutions/solutions'

const OperationsManagementSystem = () => {
  return (
    <div>
      {/* <Hero heading={operationsManagementObj.title} bgImage={operationsManagementObj.src} content={operationsManagementObj.description} /> */}
      <SolutionsCommon obj={operationsManagementObj} />
      {/* <Footer/> */}
    </div>
  )
}

export default OperationsManagementSystem