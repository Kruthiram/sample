import React, { useState } from "react";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Fab sx={{ backgroundColor: "#C1F59A", marginLeft: "60px" }}>
      <NavigationIcon
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", fontSize: "40px" }}
      />
    </Fab>
  );
};

export default ScrollButton;
