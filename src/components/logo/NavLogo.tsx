'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import GlitchLogo from './GlitchLogo';

const NavLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? <GlitchLogo /> : <Logo />}
    </div>
  );
};

export default NavLogo;
