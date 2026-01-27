import { Bookmark, Play } from "lucide-react";
import herobg from "../assets/hero.png"
import { useEffect, useState } from "react";
const Hero = () => {
    const [movie, setMovie] = useState(null)
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            // from  The Movie Database (TMDB).
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTgzMDFlZGQ2MGEzN2Y3NDlmMzhlNGFmMTJjZDE3YSIsIm5iZiI6MTc0NTQxNjIyNS44NzY5OTk5LCJzdWIiOiI2ODA4ZjAyMTI3NmJmNjRlNDFhYjY0ZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NA_LMt6-MUBLAvxMRkZtBoUif4p9YQ6aYZo-lv4-PUE",
        },
    };
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US", options)
            .then((response) => response.json())
            .then((response) => {
                if (response.results && response.results.length > 0) {
                    const randomIndex = Math.floor(Math.random() * response.results.length)
                    setMovie(response.results[randomIndex])
                }
            })
            .catch((err) => console.error(err));
    }, [])

    if (!movie) {
      return  <p>Loading ....</p>
    }
    return (
        <div>
             {/* dynamically insert the movie's backdrop path into the URL string. */}
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="hero image" className="w-full rounded-2xl h-[640px] object-cover object-center" />
            <div className=" flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
                <button className="flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base"><Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Save for Later</button>
                <button className="flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base"><Play className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Watch Now</button>
            </div>
        </div>
    )
}
export default Hero;