import TheTreeHoleBG from "../images/TheTreeHoleBG.png"
import MacrosBG from "../images/MacrosBG.png"
import BeecarefulBG from "../images/BeecarefulBG.png"
import LandLCoffee from "../images/LandLCoffee.png"
import { Beecareful } from "./Beecareful"
import { TreeHole } from "./TheTreeHole"
import { Macros } from "./Macros"
import { CoffeeShop } from "./LandLCoffeeshop"

export function Projects(){

    function toTreeHole(){
        const element = document.getElementById('TreeHole')
        element.scrollIntoView()
    }

    function toMacros(){
        const element = document.getElementById('Macros')
        element.scrollIntoView()
    }

    function toBeecareful(){
        const element = document.getElementById('Beecareful')
        element.scrollIntoView()
    }

    function toCoffeeshop(){
        const element = document.getElementById('Coffeeshop')
        element.scrollIntoView()
    }
    return (
        <div>
            <h1 className="text-white text-5xl font-light text-center mt-10">
                Recent Projects
            </h1>
            <h2>
                
            </h2>
            <div id="ShowCase" className="lg:flex gap-5 justify-between mx-20 mt-14 text-center hidden ">
                <div id="project1" className="bg-white h-80 w-64 rounded-lg" onClick={toTreeHole}>
                    <img src={TheTreeHoleBG} 
                                style={{
                                height: "100%",
                                width: "100%",
                                top: "0",
                                right: "0",
                                padding: "none",
                                zIndex: "-1",
                                objectFit:"cover"}}
                                className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                                alt="TheTreeHole"/>
                </div>
                <div id="project2" className="bg-white h-80 w-64 rounded-lg" onClick={toMacros}>
                    <img src={MacrosBG} 
                                style={{
                                height: "100%",
                                width: "100%",
                                top: "0",
                                right: "0",
                                padding: "none",
                                zIndex: "-1",
                                objectFit:"cover"}}
                                className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                                alt="Macros"/>
                </div>
                <div id="project3" className="bg-white h-80 w-64 rounded-lg" onClick={toBeecareful}>
                    <img src={BeecarefulBG} 
                                style={{
                                height: "100%",
                                width: "100%",
                                top: "0",
                                right: "0",
                                padding: "none",
                                zIndex: "-1",
                                objectFit:"cover"}}
                                className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                                alt="Beecareful"/>
                </div>
                <div id="project4" className="bg-white h-80 w-64 rounded-lg" onClick={toCoffeeshop}>
                    <img src={LandLCoffee} 
                                style={{
                                height: "100%",
                                width: "100%",
                                top: "0",
                                right: "",
                                paddingTop:"0",
                                zIndex: "-1",
                                objectFit:"cover"}}
                                className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                                alt="CoffeeShop"/>
                </div>
            </div>
            <div id="Projects">
                <div className="" id="TreeHole">
                    <h1 className="text-4xl font-extralight text-white text-center lg:border-t pt-16 lg:mt-80 mt-10">
                        The Treehole
                    </h1>
                    <TreeHole />
                </div>
                <div id="Macros">
                    <h1 className="text-4xl font-extralight text-white text-center lg:border-t pt-16">
                        Macros
                    </h1>
                    <Macros />
                </div>
                <div id="Beecareful">
                    <h1 className="text-4xl font-extralight text-white text-center lg:border-t pt-16">
                        Beecareful
                    </h1>
                    <Beecareful />
                </div>
                <div id="Coffeeshop">
                    <h1 className="text-4xl font-extralight text-white text-center lg:border-t pt-16">
                        l&l CoffeeShop
                    </h1>
                    <CoffeeShop />
                </div>
            </div>
        </div>
    )
}