import { useState } from 'preact/hooks';
import FrontShot from '../assets/hero/FrontShot.png';
import TopShot from '../assets/hero/TopShot.png';
import CloseShot from '../assets/hero/CloseShot.png';
import PotStill from '../assets/hero/PotStill.png';
const heroImages = [FrontShot, TopShot, CloseShot, PotStill];
export default function Greeting({}) {

  const randomMessage = () => heroImages[(Math.floor(Math.random() * heroImages.length))];

  const [greeting, setGreeting] = useState(heroImages[0]);

  setGreeting(randomMessage());
  return (
    <div
			class="hero min-h-screen"
			style={{
				backgroundImage:
					`url(${greeting.src})`,
			}}
		>
			<div class="hero-overlay"></div>
			<div class="hero-content text-neutral-content text-center">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold">Hi Howdy Hello</h1>
					<p class="mb-5">
						Welcome to my site! This is where I keep all of my stuff and things. Have a look around!
					</p> 
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
  );
}