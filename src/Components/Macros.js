import MacrosScreen from "../images/Macros.png"


export function Macros(){
    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
                MacrOS is a full-stack calorie tracking application, with functionality allowing users set nutrition goals, track and view their daily food/calorie/macro intake and monitor their progress over time.            
            </h2>
            <img src={ MacrosScreen } alt="Macros" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/MacrOS" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
        </div>
    )
}