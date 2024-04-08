import React from 'react'
import CardCompoentIi from '../components/CourseContent'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
export default function ItComponent() {
  return (
    <>
    <NavbarComponent/>
    <div className=' w-fullcontainer mx-auto '>
    <p className='font-bold text-[28px] mt-4 mb-4 text-center'>USEFUL CONTENTS</p>
    <div className="">
     <CardCompoentIi/>
     <CardCompoentIi/>
     <CardCompoentIi/>
    </div>
    </div>
    <FooterComponent/>
    </>
  )
}