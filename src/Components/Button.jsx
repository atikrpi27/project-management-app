import React from 'react'

export default function Button({ ...props }) {
  return (
    <button className='px-3 py-1 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100' {...props}></button>
  )
}
