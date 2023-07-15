import React, { useEffect, useState } from 'react';
import '../../styles/index.css'


const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const maxCount = 999999;
    const delay = 1000; 

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          clearInterval(timer);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatCount = (count) => {
    const digits = count.toString().padStart(6, "0");
    return digits.split("").map((digit, index) => (
      <div key={index} className="digit-box">
        {digit}
      </div>
    ));
  };

  return <div className="counter">{formatCount(count)}</div>;
};

export default Counter;