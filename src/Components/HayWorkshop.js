import HayWorkshopimg from "../images/HayWorkshop.png"


export function HayWorkshop(){
    return (
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
               HayWorkShop is a platform for me to store different useful web applications.
            </h2>
            <img src={ HayWorkshopimg } alt="HayWorkshop" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/HayWorkshop" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1>
                Link to the page <a href="https://larrywongkahei.github.io/HayWorkshop/" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
        </div>
    )
}