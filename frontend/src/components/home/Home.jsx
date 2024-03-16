import React from 'react'
import imageUrl from '/image.png'
import githubIcon from '/github.png'
import linkedinIcon from '/linkedin.png'
import twitterIcon from '/twitter.png'
import instagranIcon from '/instagram.png'
const links = [
    {
        imgSrc: githubIcon
    },
    {
        imgSrc: linkedinIcon
    },
    {
        imgSrc: twitterIcon
    },
    {
        imgSrc: instagranIcon
    }
]

const Home = () => {
    return (
        <div>
            <header className="bg-stone-500 shadow py-3">
                <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:mx-10 max-w-7xl flex flex-col items-center justify-center md:flex-row">
                    {/* Image */}
                    <div className="mb-4 md:mb-0 md:mr-8">
                        <img className="h-32 w-32 md:h-56 md:w-56 rounded-full" src={imageUrl} alt="" />
                    </div>
                    {/* Text */}
                    <div className="text-center md:text-left md:ml-4 shadow-md lg:px-10 lg:py-10 sm:px-5 sm:py-5">
                        <h1 className="text-5xl font-bold tracking-tight text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Avdhut Thorat
                        </h1>
                        <h3 className="text-1xl tracking-tight text-white">
                            MERN stack developer | Problem Solver
                        </h3>
                    </div>
                </div>
                <div className="ml-10 lg:mb-10 lg:ml-40 mt-3 mb-15 grid grid-cols-4 sm:ml-10 gap-x-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-2 touch-pinch-zoom">
                    {links.map((link, index) => (
                        <div key={index} className="mb-2 md:mb-0 md:mr-2">
                            <img className="h-7 w-7 lg:h-17 lg:w-17 md:h-15 md:w-15 rounded-full " src={link.imgSrc} alt="" />
                        </div>
                    ))}
                </div>

            </header>

        </div>
    )
}

export default Home
