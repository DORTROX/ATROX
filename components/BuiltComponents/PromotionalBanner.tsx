import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Countdown from "./Countdown";
import { Button } from "../ui/button";

export default function PromotionalBanner() {
  return (
    <Card
      className='my-[2vh] border-none object-cover'
      style={{ background: "url(/AcessBg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <CardHeader>
        <CardTitle className='text-center text-white'>Join ATROX Now</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div>
            <h1 className="text-bolder text-2xl text-white">Pre-register today to get Special Access & Role.</h1>
          <Countdown />
          </div>
          <div className="w-full text-center">
            <Button variant={'outline'}>Sign Up Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
