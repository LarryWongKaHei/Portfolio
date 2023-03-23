import { useNavigate } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


export function MainIntro (){

    const navigate = useNavigate()

    function toAbout(){
        navigate('/about')
    }
    
    function toGithub(){
        window.location.href = 'https://github.com/larrywongkahei';
    }

    function toInstagram(){
        window.location.href = 'https://www.instagram.com/heiyeungyeung520';
    }

    function toLinkedin(){
        window.location.href = 'https://www.linkedin.com/in/ka-hei-wong-429b66257';
    }


    return (
        <div className="text-white bg-black md:flex md:justify-between">
            <div className='mt-32 text-center md:text-start md:ml-10 bg-black'>
                <p className="py-3 text-xl">Hi, I'm Larry.</p>
                <p className="py-3 text-5xl font-serif">I build solution.</p>
                <p className="py-3">I'm a junior developer who tend to make a difference.</p>
                <button className='text-center mt-3 text-orange-400 hover:text-orange-500 cursor-pointer' onClick={toAbout}>Learn more ></button>
            </div>
            <div className="hidden md:flex md:flex-col mt-32 mx-auto">
                <h1 className="text-center mb-10 text-2xl font-light">
                    To connect with me
                </h1>
                <div className="flex gap-16">
                    <div>
                        <BsGithub size={54} onClick={toGithub} className="hover:cursor-pointer"/>
                    </div>
                    <div>
                        <BsInstagram size={54} onClick={toInstagram} className="hover:cursor-pointer"/>
                    </div>
                    <div>
                        <BsLinkedin size={54} onClick={toLinkedin} className="hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}