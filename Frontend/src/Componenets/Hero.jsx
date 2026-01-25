import { Bookmark, Play } from "lucide-react";
import herobg from "../assets/hero.png"
const Hero=()=>{
    return(
        <div>
           <img src={herobg} alt="hero image" className="w-full rounded-2xl h-[480px] object-cover object-center"/>
           <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
            <button className="flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base"><Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5"/> Save for Later</button>
            <button className="flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base"><Play className="mr-2 w-4 h-5 md:w-5 md:h-5"/> Watch Now</button>
            </div>
        </div>
    )
}
export default Hero;