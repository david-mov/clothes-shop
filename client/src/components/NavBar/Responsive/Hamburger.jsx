import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderStyles";
import NavBar from "../NavBar";
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <NavBar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}
export default Header;
