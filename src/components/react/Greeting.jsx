import TextPressure from "../react/TextPressure";
import Typewriter from "typewriter-effect";


import { getImage } from "astro:assets";
import FrontShot from "../../assets/hero/FrontShot-min.png";
import TopShot from "../../assets/hero/TopShot-min.png";
import CloseShot from "../../assets/hero/CloseShot-min.png";
import PotStill from "../../assets/hero/PotStill-min.png";
const optimizedFrontShot = await getImage({ src: FrontShot });
const optimizedTopShot = await getImage({ src: TopShot });
const optimizedCloseShot = await getImage({ src: CloseShot });
const optimizedPotStill = await getImage({ src: PotStill });

const Images = [
    optimizedFrontShot,
    optimizedTopShot,
    optimizedCloseShot,
    optimizedPotStill,
];

export default function About(props) {
    const selectedImage = Images[Math.floor(Math.random() * Images.length)];

    return (
        <div
            className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-blend-multiply flex-col"
            style={{
                backgroundImage: `url(${selectedImage.src})`,
                backgroundColor: `#808080`,
            }}
        >

            <div
                className="hero-content text-neutral-content text-center min-h-screen flex-col justify-items-center"
            >
                <div className="w-3xs md:w-md h-full">
                    <h1 className="hidden mb-5 text-5xl font-bold pb-10">HELLO!</h1>
                    <div
                        className="block w-full"
                        style={{ position: "relative", height: "300px" }}
                    >
                        {props.TextPressure}
                    </div>

                    <div className="h-10">
                        {props.Typewriter}
                    </div>
                    {/* <!-- <button className="btn btn-primary">Get Started</button> -->
                    <!-- <div className="motion-safe:animate-bounce flex justify-center">Scroll Down</div> --> */}
                </div>
            </div>

        </div>
    )
}