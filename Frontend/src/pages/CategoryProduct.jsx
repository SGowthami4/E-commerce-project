import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryProduct() {
    const params=useParams()
    console.log('categoryName',params.categoryName);
    
  return (
    <div>
      {params?.categoryName}
    </div>
  )
}
