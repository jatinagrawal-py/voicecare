import React, { useEffect, useState } from "react";
import LaptopView from "./Herolap";  // Import the Laptop component
import MobileView from "./Heromob";  // Import the Mobile component

const Herosection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileView /> : <LaptopView />;
};

export default Herosection;
