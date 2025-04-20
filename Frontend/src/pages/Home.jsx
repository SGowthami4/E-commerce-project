import React from 'react'
import AllProducts from './AllProducts'
import CategoryList from '../components/CategoryList'
import BannerIamges from '../components/BannerIamges'
import HorizantalCardProducts from '../components/HorizantalCardProducts'

export default function Home() {
  return (
    <div>
      <CategoryList />
      <BannerIamges />
      <HorizantalCardProducts category={'smartphones'} heading={'Top Products'}/>
    </div>
  )
}
