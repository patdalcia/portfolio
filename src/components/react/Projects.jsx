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
            <div ref={ref1} className={`transition-opacity ease-in duration-900 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <div class="min-h-screen flex justify-center items-center">
                    
                </div>
            </div>
            <div ref={ref2} className={`transition-opacity ease-in duration-900 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <div class="min-h-screen flex justify-center items-center">
                    Test
                </div>
            </div>
            <div ref={ref3} className={`transition-opacity ease-in duration-900 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                <div class="min-h-screen flex justify-center items-center">
                    Test
                </div>
            </div>
        </>
    )
}