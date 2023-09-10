import LaptopAnim from "@/public/LaptopAnim.json";
import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";


export default function Banner() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  lottieRef.current?.setSpeed(0.3);

  
  return (
    <div className='h-[80vh] overflow-hidden relative w-full'>
      <video autoPlay muted loop className='object-cover w-full h-full absolute blur-sm' src='/BannerBackground.mp4'></video>
      <div className='relative grid items-center w-full md:grid-cols-2'>
        <div className="flex justify-center m-2">
          <div>
            <h1 className='font-bold text-3xl text-white text-center sm:text-left md:text-8xl'>ATROX</h1>
            <p className='font-medium text-md text-center sm:text-left px-12 text-white'>A tech communtiy for brainstormers to build and grow</p>
          </div>
        </div>
        <Lottie lottieRef={lottieRef} className='h-2/3' animationData={LaptopAnim} />
      </div>
    </div>
  );
}

