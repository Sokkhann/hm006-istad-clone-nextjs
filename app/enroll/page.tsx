import React from 'react'
import FormComponent from '../components/form'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
export default function Enroll() {
  return (
    <div>
      <NavbarComponent/>
      <div className='mx-36'>
        <FormComponent/>
      </div>
      <FooterComponent/>
    </div>
  )
}