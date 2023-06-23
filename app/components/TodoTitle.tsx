import React from 'react'

type PropType={
    title:string
}

const TodoTitle = ({title}:PropType) => {
  return (
    <>
        <p className="font-semibold mt-10">{title}</p>
        <hr className="bg-secondery-900 h-[3px]" />
    </>
  )
}

export default TodoTitle