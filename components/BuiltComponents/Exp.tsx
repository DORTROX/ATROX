import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import ImageCluster from "./Anime";
import { useRef, useState } from "react";
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoReact, BiLogoTailwindCss,BiLogoAws, BiLogoGoogleCloud, BiLogoPython, BiLogoPhp } from 'react-icons/bi'
import {IoLogoJavascript} from 'react-icons/io'
import {SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiMicrosoftazure, SiReplit} from 'react-icons/si'
import {TbJson} from 'react-icons/tb'
import {DiNodejs, DiHeroku, DiCss3Full} from 'react-icons/di'
import {TbBrandCpp} from 'react-icons/tb'

export default function Experience() {
  const divRef = useRef<HTMLDivElement>(null);
  const [statButton, setstatButton] = useState("webdev")
  let icons: React.ReactNode[] = [];

  switch (statButton) {
    case 'softdev':
      icons = [
        <BiLogoPython size={50} />,
        <TbBrandCpp size={50} />,
      ];
      break;
    case 'webdev':
      icons = [
        <DiCss3Full size={50} />,
        <BiLogoPhp size={50} />,
        <SiExpress size={50} />,
        <SiMongodb size={50} />,
        <SiMysql size={50} />,
        <TbJson size={50} />,
        <AiFillHtml5 size={50} />,
        <BiLogoReact size={50} />,
        <IoLogoJavascript size={50} />,
        <SiNextdotjs size={50} />,
        <SiChakraui size={50} />,
        <DiNodejs size={50} />,
        <BiLogoTailwindCss size={50} />
      ];
      break;
    case 'ca':
      icons = [
        <BiLogoAws size={50} />,
        <BiLogoGoogleCloud size={50} />,
        <SiMicrosoftazure size={50} />,
        <SiReplit size={50} />,
        <DiHeroku size={50} />        
      ];
      break;
    default:
      break;
  }

  return (
    <Card className='mt-[8vh] border-none object-cover' style={{ background: "url(/PromoBannerBg.jpg)", backgroundSize: "cover" }}>
      <CardHeader>
        <CardTitle className='text-center text-white'>
          <div>
            <h1>STATS</h1>
            <p>Every skill we have acquired till now</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h1 className="text-white">Development Stack</h1>
            <div className='grid grid-cols-1 w-full gap-3 p-2 items-center justify-center md:w-1/3  '>
              <Button key={'softdev'} variant={"outline"} onClick={() => setstatButton('softdev')}>Software Development</Button>
              <Button key={'webdev'} variant={"outline"} onClick={() => setstatButton('webdev')}>Web Development</Button>
              <Button key={'ca'} variant={"outline"} onClick={() => setstatButton('ca')}>Cloud Architecture</Button>
            </div>
          </div>
          <div ref={divRef} className='relative text-white ClusterBox w-full h-[500px] md:h-full'>
          {icons.map((icon, index) => (
              <ImageCluster key={index} divRef={divRef} src={icon} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a href='https://atrox.dev' className="text-white">Check Full Stats</a>
      </CardFooter>
    </Card>
  );
}
