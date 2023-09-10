import { useEffect, useState } from "react";

export default function ImageCluster({ divRef, src }) {
  const [random, setrandom] = useState({ x: 0, y: 0 });
  function RepelMouse(e) {
    const divElement = divRef.current;
    const { width, height } = divElement.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * width - 40);
    const randomY = Math.floor(Math.random() * height - 40);
    setrandom({ x: randomX, y: randomY });
  }
  useEffect(() => {
    const divElement = divRef.current;
    const { width, height } = divElement.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * width - 40);
    const randomY = Math.floor(Math.random() * height - 40);
    setrandom({ x: randomX, y: randomY });
  }, [divRef]);
  return (
    <div style={{ top: random.y, left: random.x }} className='absolute ClusterElem' onMouseMove={RepelMouse}>
      {src}
    </div>
  );
}
