import BeecarefulPhoto from "../images/BeecarefulPhoto.png"

export function Beecareful(){
    return (
        <div className="text-white text-center mx-64">
            <h2 className="text-2xl mt-5 font-light">
                A full-stack web application built with React FrontEnd and Express BackEnd that allows users to manage their apiaries and colonies.             
             </h2>
            <img src={ BeecarefulPhoto } alt="BeeCareful" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/jomonty/javascript_project_beeCareful" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
        </div>
    )
}