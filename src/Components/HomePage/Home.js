// import React from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// import Image2 from "../Image/Image2.jpg"
// import Imagee from "../Image/Imagee.jpg"
// import Image1 from "../Image/Image1.jpg"

// function homeeee () {
//         return (
//           <Carousel  interval="3000" transitionTime="2000" infiniteLoop  height={700} width={980}  autoPlay={true}>          
//                  <img src ={Image1}/>
//                     <img src={Image2} />
//                     <img src={Imagee} />
                
//             </Carousel>
//         );
//     }

//  export default homeeee


import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import slide_01 from "../Image/slide_01.jpg"
import slide_02 from "../Image/slide_02.jpg"
import slide_03 from "../Image/slide_03.jpg"
import UAParser from "ua-parser-js";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
const CustomDot = ({ active, onClick }) => {
  return (
    <li>
      <button
        className={`custom-dot ${active ? "custom-dot--active" : ""}`}
        onClick={() => onClick()}
      />
    </li>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
// const images = [
//   "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// ];
const pic= [slide_01,slide_02,slide_03]






const Index = ({ deviceType }) => {
  return (
    <div>
      <Carousel interval="3000" transitionTime="2000" infiniteLoop    autoPlay={true}
        ssr
        // partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        showDots
        customDot={<CustomDot />}
      >
        {pic.map(image => {
          return (
            <Image id="pick"
               draggable={false}
              style={{ width: "100%", height: "100vh", backgroundImage:`url(${slide_01})` }}
              src={image}
            />
            
          );
        })}
      </Carousel>
      {/* <button onClick={pickColor()}>
    Click to change color
</button> */}


    </div>
  );
};
Index.getInitialProps = ({ req }) => {
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
export default Index;
