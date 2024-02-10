import React from 'react'

export default function Navbar({title, icon: Icon}) {
  return (
    <>
    <li className='flex space-x-4 items-center'>
        <Icon />
        <span>{title}</span>
    </li>
    </>
  )
}
