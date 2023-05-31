import Button from "../Button/Button";
import white_logo from "../Image/white_logo.png";

import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, height, width } from "@mui/system";
// import slide_01 from "../Image/slide_01.jpg"

import slide_01 from "../Image/slide_01.jpg";


const pages = ["HOME", "ABOUT US", "CONTACTUS", "BLOG", "PORFOLIO"];
const pagees = ["HOME", "ABOUT US", "CONTACTUS", "BLOG", "PORFOLIO"];

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [spacing, setSpacing] = React.useState(2);

  // const pic= [slide_01,slide_02,slide_03]

  // var random_color = pic[Math.floor(
  //   Math.random() * pic.length)];

  // var x = document.getElementById('pick');
  // x.style.backgroundImage = random_color;

  return (
    <React.Fragment>
      {/* <AppBar    sx={{ backgroundImage:`url(${slide_01})`}}
      
      > */}

      <Box
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
          backgroundImage: `url(${slide_01})`,
          height: "100vh",
        }}
      >
        {/* <Home/> */}

        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}

          {isMatch ? (
            <>
              <img className="logo" src={white_logo} width="100px" />

              <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <List>
                  {pagees.map((page, index) => (
                    <ListItemButton
                      onClick={() => setOpenDrawer(false)}
                      key={index}
                    >
                      <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
              <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon color="white" />
              </IconButton>
            </>
          ) : (
            <>
              <img className="logo" src={white_logo} width="100px" />

              {/* <Search placeholder={"search"} />  */}
              <Tabs
                sx={{ marginLeft: "600px", color: "white" }}
                indicatorColor="white"
                textColor="green"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page, index) => (
                  <Tab label={page} value={value} key={index} />
                ))}{" "}
              </Tabs>
            </>
          )}
        </Toolbar>
        <Box sx={{ color: "white", verticalAlign: "center", margin: "200px" }}>
          <p>
            <span> Design is a Hobby</span>
            <h1 style={{ padding: 0, margin: 0 }}>Responsive Layout </h1>
            <h6 style={{ padding: 0, margin: 0 }}>
              Integer ut dolor eget magna congue gravida ut at arcu. Vivamus
              maximus neque{" "}
            </h6>
            <h6 style={{ padding: 0, margin: 0 }}>
              {" "}
              quis luctus tempus. Vestibulum consequat.
            </h6>{" "}
          </p>

          <Button value={"view details"} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Header;
