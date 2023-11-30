import React, { useEffect, useState } from "react";
import AppContent from "../Content";
import AppNavbar from "../Navbar/AppNavbar";

const DefaultLayout = () => {
  // this is to monitor the size of the application with state and respond accordingly
  const [isDeskop, setIsDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="p-4 w-screen">
      <div className="max-w-[88rem] w-full mx-auto">
        <AppNavbar />
        <div className="max-w-[72.5rem] overflow-x-hidden w-full mx-auto">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
