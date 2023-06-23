import React from 'react'
import Todo from '../components/Todo'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main
      className="flex min-h-[100vh]
     justify-center bg-primary-900"
    >
      <Todo/>
      <Footer/>
    </main>
  )
}

export default page