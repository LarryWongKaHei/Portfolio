import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Navbar (){

    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()

    function toGithub(){
        window.location.href = 'https://github.com/larrywongkahei';
    }

    function toInstagram(){
        window.location.href = 'https://www.instagram.com/heiyeungyeung520';
    }

    function toLinkedin(){
        window.location.href = 'https://www.linkedin.com/in/ka-hei-wong-429b66257';
    }

    const pathname = window.location.pathname

    function toHome(){
        navigate('/portfolio')
        if(showMenu){
            setShowMenu(!showMenu)
        }

    }

    function toAbout(){
        navigate('/about')
        if(showMenu){
            setShowMenu(!showMenu)
        }
    }

    function toContact(){
        navigate('/contact')
        if(showMenu){
            setShowMenu(!showMenu)
        }
    }

    function toProjects(){
        navigate('/projects')
        if(showMenu){
            setShowMenu(!showMenu)
        }
    }

    function clickMenu (){
        setShowMenu(!showMenu)
    }

    return (
        <div className="text-white py-5 sticky top-0 flex bg-black">
            {showMenu ? 
            <div className="md:hidden">
                <AiOutlineClose size={25} className="ml-5 hover:cursor-pointer" onClick={clickMenu}/>
            </div> :
            <div className="md:hidden">
                <AiOutlineMenu size={25} className="ml-5 hover:cursor-pointer" onClick={clickMenu}/>
            </div> }

            <div className="w-full flex ml-14">
                <ul className="hidden md:flex gap-8">
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toHome}>Home</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toAbout}>About</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toProjects}>Projects</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toContact}>Contact</li>
                </ul>
            </div>
            <div id="menu" className={showMenu? "fixed left-0 top-16 bg-black h-full opacity-90 transition duration-500 ease-in-out" 
            : "transition duration-300 ease-out fixed right-[100%]"}>
                <ul className="mt-10 flex flex-col gap-24 mx-20 text-center">
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toHome}>Home</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toAbout}>About</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toProjects}>Projects</li>
                    <li className="hover:text-gray-600 cursor-pointer" onClick={toContact}>Contact</li>
                </ul>
                <div className="flex gap-6 justify-center mt-20">
                        <div>
                            <BsGithub size={23} onClick={toGithub} className="hover:cursor-pointer"/>
                        </div>
                        <div>
                            <BsInstagram size={23} onClick={toInstagram} className="hover:cursor-pointer"/>
                        </div>
                        <div>
                            <BsLinkedin size={23} onClick={toLinkedin} className="hover:cursor-pointer"/>
                        </div>                    
                    </div>
            </div>
            {pathname === "/"?
                null:
            <div className="hidden md:flex gap-5 mr-4">
                <div>
                    <BsGithub size={23} onClick={toGithub} className="hover:cursor-pointer"/>
                </div>
                <div>
                    <BsInstagram size={23} onClick={toInstagram} className="hover:cursor-pointer"/>
                </div>
                <div>
                    <BsLinkedin size={23} onClick={toLinkedin} className="hover:cursor-pointer"/>
                </div>
            </div>}
        </div>
    )
}