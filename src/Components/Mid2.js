import blog_02 from "./Image/blog_02.jpg";
import blog_01 from "./Image/blog_01.jpg";
import blog_03 from "./Image/blog_03.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import blogbg from "./Image/blogbg.png";

export default function MasonryImageList() {
  return (
    <Box
      sx={{
        width: "100%",
        overflowY: "scroll",
        backgroundImage: `url(${blogbg})`,
        backgroundSize: "100vh",
      }}
    >
      <h3
        style={{
          paddingTop: "25px",
          textDecorationLine: "underline",
          color: "white",
          fontWeight: "bolder",
        }}
      >
        OUR BLOG POSTS
      </h3>
      <ImageList variant="masonry" cols={2} gap={25} sx={{ margin: "150px" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar
              title={item.subtitle}
              subtitle={item.Poster}
              sx={{ textAlign: "justify" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: `${blog_01}`,
    title: "Bed",
    subtitle: "  Delecioius food served",
    Poster: " posted :George / Date: 11 Aug 2017 / Category: Design",
  },
  {
    img: `${blog_02}`,
    title: "Books",
    subtitle: "Creative & clean workspace",
    Poster: "posted: posteKerley / Date: 24 Jul 2017 / Category: Artwork",
  },
  {
    img: `${blog_03}`,
    title: "Candle",

    subtitle: "Crashed place captured",
    Poster: "posted:Johnny / Date: 16 Jul 2017 / Category: Branding",
  },
];
