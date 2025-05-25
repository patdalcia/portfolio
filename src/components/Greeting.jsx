import { useState } from 'preact/hooks';


export default function Greeting({ heroImages }) {

  const randomMessage = () => heroImages[(Math.floor(Math.random() * heroImages.length))];

  const [greeting, setGreeting] = useState(heroImages[0]);

	setGreeting(randomMessage());
	return (
		<div
			class="min-h-screen w-full bg-no-repeat bg-fixed bg-cover bg-center bg-blend-multiply flex-col"
			style={{
				backgroundImage:
					`url(${greeting.src})`,
				backgroundColor:
					`#808080`,
			}}
		>
			<div
				class="hero min-h-screen flex flex-col"
			>
				{/* <div class="hero-overlay"></div> */}
				<div class="hero-content text-neutral-content text-center min-h-screen flex-col justify-items-center">
					<div class="max-w-md">
						<h1 class="mb-5 text-5xl font-bold">Hi Howdy Hello</h1>
						<p class="mb-5">
							Welcome to my site! This is where I keep all of my stuff and things. Have a look around!
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
				<div class="h-screen">
					<h1>Test</h1>
				</div>

			</div>
		</div>
	);
}