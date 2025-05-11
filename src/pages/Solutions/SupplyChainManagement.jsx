import React from 'react'
import SolutionsCommon from '../../components/SolutionsCommon'
import { supplyChainObj } from '../../data/solutions/solutions'

const SupplyChainManagement = () => {
  return (
    <div>
      <SolutionsCommon obj={supplyChainObj} />
    </div>
  )
}

export default SupplyChainManagement