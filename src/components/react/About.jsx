import { useRef } from 'react';
import { useIsVisible } from './useIsVisible';

export default function About() {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);


    return (
        <>
            <div ref={ref1} className={`transition-opacity ease-in duration-1200 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <div className="min-h-screen flex justify-center items-center">
                    Digital Art Projects
                </div>
            </div>
            <div ref={ref2} className={`transition-opacity ease-in duration-1200 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <div className="min-h-screen flex justify-center items-center">
                    Programming Projects
                </div>
            </div>
            <div ref={ref3} className={`transition-opacity ease-in duration-1200 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                <div className="min-h-screen flex justify-center items-center">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">About Me</h1>
                                <p className="py-6">
                                    Talking about myself makes me wanna die. So I'll keep this short.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}