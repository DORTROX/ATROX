import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; 

const PromotionalCard: React.FC =() => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };
  return (
    <div className="px-5 my-[-6vh] relative grid  grid-cols-1 gap-5 md:grid-cols-3">
      <Card className="mouse-tracking" onMouseMove={handleMouseMove}>
        <CardHeader>
          <CardTitle>Global Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Find out all the channels of your interest with DM & more</CardDescription>
        </CardContent>
        <CardFooter>
          <a href='https://atrox.dev'>Visit Chat</a>
        </CardFooter>
      </Card>
      <Card  className="mouse-tracking" onMouseMove={handleMouseMove}>
        <CardHeader>
          <CardTitle>Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Access available tools over the cloud.</CardDescription>
        </CardContent>
        <CardFooter>
          <a href='https://atrox.dev'>Visit Playground</a>
        </CardFooter>
      </Card>
      <Card  className="mouse-tracking" onMouseMove={handleMouseMove}>
        <CardHeader>
          <CardTitle>Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Want to spend some time scrolling?</CardDescription>
        </CardContent>
        <CardFooter>
          <a href='https://atrox.dev'>Visit Feed</a>
        </CardFooter>
      </Card>
    </div>
  );
}
export default PromotionalCard;