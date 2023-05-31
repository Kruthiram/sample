import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import { RiBasketballLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import React from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Avatar,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UAParser from "ua-parser-js";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Scroll from "../Scroll";
import ScrollButton from "../Scroll";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Footer = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", p: 3 }}>
        {isMatch ? (
          <>
            <Box
              sx={{
                my: 5,
                "& svg": {
                  fontSize: "30px",
                  cursor: "pointer",
                  mr: 2,
                },
                // "& svg:hover": {
                //   color: "#C62828",
                //   transform: "translateX(5px)",
                //   transition: "all 400ms",
                //   backgroundColor: "white",
                //   borderRadius: "7px",
                // },
                "& h3": {
                  textAlign: "center",
                  margin: 0,
                },
                "& p": {
                  textAlign: "center",
                  margin: 0,
                },
              }}
            >
              <Grid container spacing={3} style={{ margin: "5px" }}>
                <Grid item xs={3}>
                  <Typography
                    variant="h5"
                    sx={{
                      "@media (max-width:600px)": { fontSize: "12px" },
                    }}
                  >
                    Copyright &copy; 2017 Company Name -Design:{" "}
                    <span style={{ color: "red" }}> Tooplate</span>
                  </Typography>
                </Grid>

                <Grid sx={{ marginLeft: "50px" }}>
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                      "@media (max-width:600px)": {
                        marginLeft: "50px",
                       
                      },
                    }}
                  >
                    <Avatar
                      style={{ backgroundColor: "#C1F59A", padding: "10px" }}
                    >
                      {" "}
                      <FaFacebookF color="black" />
                    </Avatar>
                    <Avatar
                      style={{ backgroundColor: "#C1F59A", padding: "10px" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="fa-5x"
                        color="black"
                        fixedWidth
                      />
                    </Avatar>
                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <FaLinkedinIn color="black" />
                    </Avatar>
                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <RssFeedOutlinedIcon sx={{ color: "black" }} />
                    </Avatar>
                    {/* <Avatar  style={{backgroundColor:"#C1F59A"}}> <FontAwesomeIcon  icon={light("basketball")}   size="fa-10x" color="black"
                          fixedWidth/></Avatar> */}
                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <RiBasketballLine color="black" />
                    </Avatar>
                    </Stack>
                </Grid>
                <Scroll />
              </Grid>
            
            </Box>
          </>
        ) : (
          <>
            <div>
              <Grid
                container
                spacing={3}
                style={{ margin: "50px" }}
                responsive={responsive}
              >
                <Grid item xs={3}>
                  <Typography
                    variant="h5"
                    sx={{
                      "@media (max-width:600px)": {},
                      fontSize: "12px",
                    }}
                  >
                    Copyright &copy; 2017 Company Name -Design:{" "}
                    <span style={{ color: "red" }}> Tooplate</span>
                  </Typography>
                </Grid>

                <Grid sx={{ marginLeft: "550px" }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      "@media (max-width:600px)": {
                        marginRight: "150px",
                        margin: "150px",
                      },
                    }}
                  >
                    <Avatar
                      style={{ backgroundColor: "#C1F59A", padding: "10px" }}
                    >
                      {" "}
                      <FaFacebookF color="black" />
                    </Avatar>
                    <Avatar
                      style={{ backgroundColor: "#C1F59A", padding: "10px" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="fa-10x"
                        color="black"
                        fixedWidth
                      />
                    </Avatar>
                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <FaLinkedinIn color="black" />
                    </Avatar>
                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <RssFeedOutlinedIcon sx={{ color: "black" }} />
                    </Avatar>

                    <Avatar style={{ backgroundColor: "#C1F59A" }}>
                      {" "}
                      <RiBasketballLine color="black" />
                    </Avatar>
                  </Stack>
                </Grid>
                <Scroll />
              </Grid>
            </div>
          </>
        )}
      </Box>
    </>
  );
};
Footer.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Footer;
