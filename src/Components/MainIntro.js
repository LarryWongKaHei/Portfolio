import Photo from '../images/Photo.png'

export function MainIntro (){

    return (
        <div className="text-white bg-black md:flex">
            <div>
                <div className='mt-32 text-center md:text-start ml-14 bg-black'>
                    <p className="py-3 text-xl">Hi, I'm Larry.</p>
                    <p className="py-3 text-5xl font-serif">I build solution.</p>
                    <p className="py-3">I'm a junior developer who tend to make a difference.</p>
                    <button className='text-center mt-3 text-orange-400 hover:text-orange-500 cursor-pointer'>Learn more ></button>
                </div>
            </div>
            <div className=''>
                {/* <p className="mt-5 ml-52">Meet my personal assistance Jarvis</p> */}
                <img src={Photo} className='hidden md:flex w-72 fixed right-0'/>
            </div>
        </div>
    )
}