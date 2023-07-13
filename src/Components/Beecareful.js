import BeecarefulPhoto from "../images/BeecarefulPhoto.png"

export function Beecareful(){

    function toTop(){
        window.scrollTo(0,0)
    }

    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
                A full-stack web application built with React FrontEnd and Express BackEnd that allows users to manage their apiaries and colonies.             
             </h2>
            <img src={ BeecarefulPhoto } alt="BeeCareful" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/jomonty/javascript_project_beeCareful" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <span className="text-blue-500 hover:text-blue-600 hover:cursor-pointer" onClick={toTop}>Here</span>
            </h1>
        </div>
    )
}