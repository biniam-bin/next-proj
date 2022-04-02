import React from 'react'
import Image from 'next/image'
const Nav = () => {
    return (
        <div className="nav w-full h-20 px-6 flex justify-between shadow-md">
            <div className="logo-section flex">
                <Image className="h-2 w-full" width="110" height="110" src="/Icons/logo.svg" />
            </div>
            <div className="nav-items flex">
                <ul className="flex justify-center items-center text-gray-400 font-bold text-sm">
                    <li className="mx-8 cursor-pointer">Home</li>
                    <span className="flex flex-col justify-center items-center">

                        <li className="mx-8 cursor-pointer active mt-1 text-gray-800">Products</li>
                        <span className="flex w-5 h-1 bg-gray-800 rounded-full"></span>
                    </span>
                    <li className="mx-8 cursor-pointer">Contact</li>
                    <li className="mx-8 cursor-pointer">About</li>
                </ul>
            </div>
            <div className="profile-section flex items-center">
                <div className="bag flex flex-col justify-center items-center rounded-full p-2 border border-gray-300">
                    <div className="num absolute rounded-full ml-3 bg-blue-500 -mr-5 text-xs px-1 -mt-5">3</div>
                    <Image className="h-2 w-full" width="15" height="15" src="/Icons/bag.svg" />
                </div>
                <div className="profile mx-2 ml-5">
                    <Image className="h-2 w-full rounded-full" width="32" height="32" src="/Icons/profile.jpg" />

                </div>
            </div>
        </div>
    )
}

export default Nav