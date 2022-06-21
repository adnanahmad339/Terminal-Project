import React from 'react';
const Sider = () => {
  return (<>
  
  <video autoPlay loop muted  style={{width:"100vw", height:"400vh", marginTop:"-617px",marginLeft:"0px", zIndex:"-1"}}>
<source src='https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4?v=1630055283' type='video/mp4'/>
    
  </video>
  
  </>  );
}
 
export default Sider;
















// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
// import styled from "styled-components";
// import { sliderItems } from "../../data";
// import { mobile } from "../../responsive";
// import {Link} from 'react-router-dom'
// const Container = styled.div`
//   width: 100%;
//   height: 83vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   margin-top:20px;
//     ${mobile({ display: "none" })}
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;

//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 70%;
//   margin-left:20%
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 60px;
//   // border:2px solid red;
//   height:500px

 
// `;

// const Title = styled.h1`
//   font-size: 60px;
//   margin-top:5px
// `;

// const Desc = styled.p`
//   margin: 10px 0px;
//   font-size: 16px;
//   font-weight: 500;
//   letter-spacing: 2px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>
//             <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//             <a href="#container">
          
//               <Button >SHOW NOW</Button>
            
//             </a>
//             </InfoContainer>
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;