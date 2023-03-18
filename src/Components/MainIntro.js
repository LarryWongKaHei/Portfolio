import { useNavigate } from 'react-router-dom'

export function MainIntro (){

    const navigate = useNavigate()

    function toAbout(){
        navigate('/about')
    }

    return (
        <div className="text-white bg-black md:flex md:justify-between">
            <div>
                <div className='mt-32 text-center md:text-start ml-10 bg-black'>
                    <p className="py-3 text-xl">Hi, I'm Larry.</p>
                    <p className="py-3 text-5xl font-serif">I build solution.</p>
                    <p className="py-3">I'm a junior developer who tend to make a difference.</p>
                    <button className='text-center mt-3 text-orange-400 hover:text-orange-500 cursor-pointer' onClick={toAbout}>Learn more ></button>
                </div>
            </div>
        </div>
    )
}