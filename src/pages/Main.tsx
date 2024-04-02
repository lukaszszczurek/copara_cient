import React from 'react';
import {CardMedia, Typography} from "@mui/material";
import styled from "styled-components";
import Slider from 'react-slick';
import Carousel from "react-material-ui-carousel";
import StyledCarousel from "../components/Main/StyledCarousel";
import AboutTutor from "../components/Main/AboutTutor";
import TEST from "../components/Main/TEST";
import Nawbar from "../components/Main/Nawbar";

function Main() {




    return (
        <div>
            <Nawbar/>
            <Typography variant={"h2"}>Kuźnia Olimpijska</Typography>
            <Container>
                <StyledCarousel/>
                {/*<AboutTutor/>*/}
                <TEST/>



            </Container>

        </div>
    );
}

const Container = styled.div`
    position: relative;

    min-height:100vh;
    overflow-x: hidden;
    display: block;
    top:72px;
    padding: 0 3.5vh+3px;
    

`



const Wrap=styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
    
  
  a{
    border-radius: 4px;
    rgb(0 0 0 /73%) 0 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    
    
    
    
    img{
      width: 100%;
      height: 100%;
    }
    
    &:hover{
      
        border: 4px  solid rgba(249,249,249,0.8);
        opacity: 0.85;
      
      transition-duration: 300ms;
    }
  }

`;
export default Main;