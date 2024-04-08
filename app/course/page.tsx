import React from 'react'
import CardComponent from '../components/CarouselComponent'
import CourseCardComponent from '../components/Courses'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'

export default function 
() {
  return (
    <div>
      <NavbarComponent/>
      <p className='text-[28px] text-center font-bold mb-2 mt-2'>COURSES</p>
      <div className='my-4'>
      <CourseCardComponent/>
      </div>
      <FooterComponent/>
    </div>
  )
}