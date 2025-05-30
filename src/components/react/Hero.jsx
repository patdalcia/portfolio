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

const selectedImage = Images[Math.floor(Math.random() * Images.length)];

export default function Hero(props) {
    return (
        <div
            className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-blend-multiply flex-col"
            style={{
                backgroundImage: `url(${selectedImage.src})`,
                backgroundColor: `#808080`,
            }}>
            {props.HeroContent}
        </div>
    )
}