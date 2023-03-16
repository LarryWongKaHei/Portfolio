import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

export function Navbar (){

    const [showMenu, setShowMenu] = useState(false)

    function clickMenu (){
        
    }

    return (
        <div className="bg-gray-900 text-white py-5 sticky top-0 grid grid-cols-1">
            <div id="logoAndName" className="flex justify-start ml-5">
                Larry
            </div>
            <div>
                <GiHamburgerMenu size={25} className="fixed top-5 right-5"/>
            </div>
        </div>
    )
}