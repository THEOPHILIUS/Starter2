import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";
import { FaPen } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { TbAlarmSnooze } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import style from "./header.module.css"

export default function Header() {
  return (

<div className="bg-gray-200 h-screen">

    <div className="flex space-x-2 items-center p-8">
        <Link href='/'>
        <RxHamburgerMenu className="text-3xl"/>
        </Link>

        <Link href='/'>
        <Image src='/gmail.png' alt="gmail" width={50} height={50}/>
        </Link>
    </div>
    <nav>
        <ul className={style.header}>
            <Navbar title="compose" icon={FaPen} />
            <Navbar title="inbox" icon={RiInboxFill}/>
            <Navbar title="starred" icon={FaRegStar}/>
            <Navbar title="snoozed" icon={TbAlarmSnooze}/>
            <Navbar title="sent" icon={FiSend}/>
            <Navbar title="drafts" icon={IoDocumentOutline}/>
        </ul>
    </nav>
</div>
  )
}
