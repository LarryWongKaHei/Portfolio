import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

export function Navbar (){

    const [showMenu, setShowMenu] = useState(false)

    function clickMenu (){
        setShowMenu(!showMenu)
    }

    return (
        <div className="bg-black text-white py-5 sticky top-0 flex justify-between">
            <div id="logoAndName" className="flex ml-5">Larry</div>
            <div className="mx-auto">
                <ul className="hidden md:flex gap-6 pr-10">
                    <li className="hover:text-gray-600 cursor-pointer">Home</li>
                    <li className="hover:text-gray-600 cursor-pointer">Portfolio</li>
                    <li className="hover:text-gray-600 cursor-pointer">About</li>
                    <li className="hover:text-gray-600 cursor-pointer">Pricing</li>
                    <li className="hover:text-gray-600 cursor-pointer">Blog</li>
                    <li className="hover:text-gray-600 cursor-pointer">Contact</li>
                </ul>
            </div>
            <div id="menu" className={showMenu? "fixed left-0 top-16 bg-black h-full opacity-90 transition duration-500 ease-in-out" 
            : "transition duration-300 ease-out fixed right-[100%]"}>
                <ul className="mt-10 flex flex-col gap-20 mx-20">
                    <li className="hover:text-gray-600 cursor-pointer">Home</li>
                    <li className="hover:text-gray-600 cursor-pointer">Portfolio</li>
                    <li className="hover:text-gray-600 cursor-pointer">About</li>
                    <li className="hover:text-gray-600 cursor-pointer">Pricing</li>
                    <li className="hover:text-gray-600 cursor-pointer">Blog</li>
                    <li className="hover:text-gray-600 cursor-pointer">Contact</li>
                </ul>
            </div>
            <div className="block md:hidden">
                <GiHamburgerMenu size={25} className="mr-5 hover:cursor-pointer" onClick={clickMenu}/>
            </div>
        </div>
    )
}