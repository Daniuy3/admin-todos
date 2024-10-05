"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SideBarProps {
    href: string;
    title: string;
    icon: React.ReactNode;
}

export const SidebarItem = ({href,icon,title} : SideBarProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li>
          <Link href={href} className={
            isActive?  "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400 transition-colors duration-75" : "flex items-center space-x-4 px-4 py-3 hover:bg-gray-100 rounded-xl transition-colors duration-75"
          }>
            {icon}
            <span className="-mr-1 font-medium">{title} </span>
          </Link>
        </li>
  )
}
