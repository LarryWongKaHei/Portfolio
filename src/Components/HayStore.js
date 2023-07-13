<<<<<<< HEAD
import HayStoreimg from "../images/E-Commence.png"


export function HayStore(){
    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
                HayStore is a E-Commerce application built with C#, ASP.Net Razor page and Blazor Component with layout Amazon alike.        
            </h2>
            <img src={ HayStoreimg } alt="HayStore" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/E-Commerce" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1>
                Link to the page <a href="https://haystore.herokuapp.com/" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
=======
import HayStoreimage from "../images/HayStore.png"


export function HayStore(){


    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
                HayStore is a E-Commerce website based on Amazon's layout and css, it is built using ASP.NET Core Razor page. It is a starting point of my .Net Journey.
            </h2>
            <img src={ HayStoreimage } alt="HayStore" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/E-Commerce" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
            Link to the Page <a href="https://haystore.herokuapp.com/" className="text-blue-500 hover:text-blue-600">Here</a>
>>>>>>> e4ed69dfaa24baf6fcb645cd0d9bbe8622029e8c
            </h1>
        </div>
    )
}