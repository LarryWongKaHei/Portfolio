import Thetreehole from "../images/TreeHole.png"

export function TreeHole(){
    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
            TreeHole is a metaphor in HongKong, it is used to describe a place or a person that you could rely on to share your secrets and release your emotions. and they are most likely a listener, that is why they are called TreeHole
            </h2>
            <img src={ Thetreehole } alt="TheTreeHole" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Page <a href="https://larrywongkahei.github.io/TheTreeHole/" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/TheTreeHole" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
        </div>
    )
}