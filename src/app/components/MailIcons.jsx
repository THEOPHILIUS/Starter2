import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { MdLabelImportantOutline } from "react-icons/md";


export default function MailIcons() {
  return (
    <aside className='flex items-center space-x-3'>
        <MdOutlineCheckBoxOutlineBlank />
        <IoMdStarOutline />
        <MdLabelImportantOutline />
    </aside>
  )
}
