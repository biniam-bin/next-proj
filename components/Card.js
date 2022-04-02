import React from 'react'
import Image from "next/image"


const Card = ({name, price, img}) => {
    return (
        <div className="w-56 m-8 cursor-pointer rounded-md h-[350px] bg-white ">
            {/* <Image className="h-2 w-full" width="224" height="110" src="/Icons/profile.jpg" /> */}
            <div className="p-2 h-4/5 rounded-md w-full">

                <img src={img} className="h-4/5 rounded-md w-full" alt="" />
            </div>
            <div className="-mt-10">
                <p className="info flex justify-between px-1 text-xs my-2"><p>{name}</p><p>${price}</p></p>
                <div className="button flex justify-center items-center">
                    <p className="bg-black cursor-pointer text-white text-sm w-full flex justify-center rounded-full py-2 mb-1 ease-in duration-300">ADD TO CART</p>
                </div>
            </div>
        </div>
    )
}

export default Card