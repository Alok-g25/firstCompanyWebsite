import React from 'react'
import SolutionsCommon from '../../components/SolutionsCommon'
import { FleetManagementObj } from '../../data/solutions/solutions'

const Fleet = () => {
  return (
    <div>
      <SolutionsCommon obj={FleetManagementObj} />
    </div>
  )
}

export default Fleet