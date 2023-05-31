import { Typography } from "@mui/material";
import firsts from "./Image/firsts.png";
import seconds from "./Image/seconds.png";
import thirds from "./Image/thirds.png";
import fourths from "./Image/fourths.png";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { borderBottom, lineHeight } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        overflowY: "scroll",
        backgroundColor: "whitesmoke",
        backgroundSize: "100vh",
      }}
    >
      <h3 style={{ paddingTop: "50px", textDecorationLine: "underline" }}>
        WHAT WE DO
      </h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 16 }}
        sx={{ padding: "150px" }}
      >
        {card.map((item, index) => {
          return (
            <>
              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  {" "}
                  <img src={item.image} />{" "}
                  <p
                    style={{
                      fontWeight: "bolder",
                      padding: "25px",
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                  </p>{" "}
                  <p
                    style={{
                      color: "grey",
                      fontFamily: "sans-serif",
                      lineHeight: "20px",
                      margin: "5px",

                     
                    
                      
                    }}


                  >
                    {" "}
                    {item.ds}
                  </p>
                </Item>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
}
const card = [
  {
    id: 0,
    image: `${firsts}`,
    title: " Easy Customizations",
    ds: "Meteor is free HTML website template by tooplate.Feel free to use this layout for this project.",
  },
  {
    id: 1,
    image: `${seconds}`,
    title: "Creative Ideas",
    ds: "Blodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke. typewriter",
  },

  {
    id: 2,
    image: `${thirds}`,
    title: "Good Profit",
    ds: "Blodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke. typewriter.",
  },
  {
    id: 3,
    image: `${fourths}`,
    title: "Open To Public",
    ds: "Blodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke. typewriter.",
  },
];
