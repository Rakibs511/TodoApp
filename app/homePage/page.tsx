import React from 'react'
import Todo from '../components/Todo'

const page = () => {
  return (
    <main
      className="flex min-h-[100vh]
     justify-center bg-primary-900"
    >
      <Todo/>
    </main>
  )
}

export default page