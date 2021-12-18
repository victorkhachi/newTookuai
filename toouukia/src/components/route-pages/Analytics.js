
import React, { useState, useEffect } from "react";
const Analytics = () => {
   const [show, setShow] = useState(true);
   const handleResize = () => {
     if (window.innerWidth > 1265) {
       setShow(true);
     } else {
       setShow(false);
     }
   };

   useEffect(() => {
     window.addEventListener("resize", handleResize);
   });
  return (
    <div>
      <h1 className="sectD">Analytics Page</h1>
    </div>
  );
}

export default Analytics
