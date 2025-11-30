import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 40, className = "" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={`typewriter ${className}`}>{display}</span>;
}
