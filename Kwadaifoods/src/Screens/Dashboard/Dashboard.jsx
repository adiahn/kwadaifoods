import React from 'react'
import MySlider from '../../Components/Slider/MySlider'
import CategoryNav from '../../Components/Category/CategoryNav'

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full mb-6">
        <MySlider />
      </div>
      <div className="w-full">
        <CategoryNav />
      </div>
      
    </div>
  )
}

export default Dashboard