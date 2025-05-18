"use client";

import { useEffect, useState, useRef } from "react";
import { SlideUpText } from "./SlideUpText";

export default function RealTimeClock() {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");

  const prevTimeRef = useRef<{ hours: number; minutes: number }>({
    hours: -1,
    minutes: -1,
  });

  const [animateHour, setAnimateHour] = useState(false);
  const [animateMinute, setAnimateMinute] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentSeconds = now.getSeconds();

      setSeconds(currentSeconds.toString().padStart(2, "0"));

      if (prevTimeRef.current.hours !== currentHours) {
        setHours(currentHours.toString().padStart(2, "0"));
        setMinutes(currentMinutes.toString().padStart(2, "0"));
        setAnimateHour(true);
        setAnimateMinute(true);
        prevTimeRef.current.hours = currentHours;
        prevTimeRef.current.minutes = currentMinutes;
      } else if (prevTimeRef.current.minutes !== currentMinutes) {
        setMinutes(currentMinutes.toString().padStart(2, "0"));
        setAnimateMinute(true);
        prevTimeRef.current.minutes = currentMinutes;
      }
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-baseline gap-2 text-sm font-mono">
      <SlideUpText
        text={hours}
        className="text-primary"
        animateOnce={false}
        triggerAnimation={animateHour}
        onAnimationEnd={() => setAnimateHour(false)}
      />
      <span>:</span>
      <SlideUpText
        text={minutes}
        className="text-primary"
        animateOnce={false}
        triggerAnimation={animateMinute}
        onAnimationEnd={() => setAnimateMinute(false)}
      />
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
}
