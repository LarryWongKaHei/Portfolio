import CoffeeShopScreen from "../images/CoffeeShop.png"

export function CoffeeShop(){
    return(
        <div className="text-white text-center mx-64">
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
            <h1 className="mt-4 text-lg">
                Back to the top <a href="#top" className="text-blue-500 hover:text-blue-600">Here</a>
            </h1>
        </div>
    )
}