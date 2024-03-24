import React, { useRef, useState } from "react";

const Menu = () => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggeMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="menu-container">
      <div className="menu-bar">
        <div className="menu-logo">LOGO</div>
        <div className="menu-open">
          <p>Menu</p>
        </div>
        <div className="menu-overlay">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
