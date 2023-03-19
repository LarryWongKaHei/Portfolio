import TheTreeHoleBG from "../images/TheTreeHoleBG.png"
import MacrosBG from "../images/MacrosBG.png"
import BeecarefulBG from "../images/BeecarefulBG.png"
import LandLCoffee from "../images/LandLCoffee.png"
import { Beecareful } from "./Beecareful"
import { TreeHole } from "./TheTreeHole"
import { Macros } from "./Macros"
import { CoffeeShop } from "./LandLCoffeeshop"


export function Projects(){
    return (
        <div>
            <h1 className="text-white text-5xl font-light text-center mt-10 lg:text-sm xl:text-xl">
                Recent Projects
            </h1>
            <h2>
                
            </h2>
            <div id="ShowCase" className="flex gap-5 justify-between mx-20 mt-14 text-center">
                <div id="project1" className="bg-white h-80 w-64 rounded-lg">
                    <a href="#TreeHole">
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
                    </a>

                </div>
                <div id="project2" className="bg-white h-80 w-64 rounded-lg">
                    <a href="#Macros">
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
                    </a>
                </div>
                <div id="project3" className="bg-white h-80 w-64 rounded-lg">
                    <a href="#Beecareful">
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
                    </a>
                </div>
                <div id="project4" className="bg-white h-80 w-64 rounded-lg">
                    <a href="#Coffeeshop">
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
                    </a>
                </div>
            </div>
            <div id="Projects">
                <div id="TreeHole">
                    <TreeHole />
                </div>
                <div id="Macros">
                    <Macros />
                </div>
                <div id="Beecareful">
                    <Beecareful />
                </div>
                <div id="Coffeeshop">
                    <CoffeeShop />
                </div>
            </div>
        </div>
    )
}