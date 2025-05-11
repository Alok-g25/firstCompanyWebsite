import React from 'react'
import Hero from '../../components/Hero'
import SolutionsCommon from '../../components/SolutionsCommon'
import { CMSObj } from '../../data/solutions/solutions'

const CMS = () => {
  return (
    <div>
      <SolutionsCommon obj={CMSObj} />
    </div>
  )
}

export default CMS