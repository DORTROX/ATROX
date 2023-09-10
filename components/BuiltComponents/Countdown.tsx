import { useState, useEffect } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const endDate = new Date(1696876200000);
        const intervalId = setInterval(() => {
            const timeDiff = endDate.getTime() - new Date().getTime();
            setTimeLeft(timeDiff);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className='text-white'>
            {`${days} days ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
        </div>
    );
}