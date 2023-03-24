import CoffeeShopScreen from "../images/CoffeeShop.png"

export function CoffeeShop(){

    function toTop(){
        window.scrollTo(0,0)
    }

    return(
        <div className="text-white text-center lg:mx-64 mx-10">
            <h2 className="text-2xl mt-5 font-light">
                A E-commence web application built with React that allows users to add items to the bucket and checkout.
            </h2>
            <img src={ CoffeeShopScreen } alt="CoffeeShop" className="mt-10"/>
            <h1 className="mt-4 text-lg">
                Link to the Page <a href="http://l-and-l-coffee-shop.s3-website.eu-west-2.amazonaws.com/" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg">
                Link to the Github page <a href="https://github.com/larrywongkahei/e-commerce-lab" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
            <h1 className="mt-4 text-lg border-b pb-10 xl:border-b-0">
                Back to the top <span className="text-blue-500 hover:text-blue-600 hover:cursor-pointer" onClick={toTop}>Here</span>
            </h1>
        </div>
    )
}