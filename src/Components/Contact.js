import { HiOutlineMail } from "react-icons/hi"

export function Contact(){
    return (
        <div className="text-white mt-20">
            <h1 className="text-center text-4xl font-extralight">To contact me</h1>
            <div id="email" className="text-2xl mt-12 font-light flex flex-col">
                <p className="mt-3 text-center">Via email</p>
                <button className="mx-auto">
                    <a href="mailto:makemak123@gmail.com" className="">
                        < HiOutlineMail className="w-10 h-10 mt-4"/>
                    </a>
                </button>
            </div>

            
        </div> 
    )
}