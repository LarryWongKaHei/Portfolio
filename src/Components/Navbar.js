import { GiHamburgerMenu } from "react-icons/gi"

export function Navbar (){
    return (
        <div className="bg-gray-900 text-white py-5 sticky top-0 grid">
            <div id="logoAndName" className="flex justify-start ml-5">
                Larry
            </div>
            <GiHamburgerMenu />
        </div>
    )
}