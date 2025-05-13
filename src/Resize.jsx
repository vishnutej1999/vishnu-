import React, { useState, useEffect } from 'react';

const Resize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);  // Run effect only once on mount

  return (
    <div>
      <h1>Welcome to screen Resizer</h1>
      <div><h1>Width: {screenSize.width}px</h1></div>
      <div><h1>Height: {screenSize.height}px</h1></div>
    </div>
  );
};

export default Resize;
