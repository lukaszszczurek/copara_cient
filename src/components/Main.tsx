import React from 'react';
import {CardMedia, Typography} from "@mui/material";
import { Paper, Button } from '@mui/material';
import styled from "styled-components";
import Slider from 'react-slick';
import Carousel from "react-material-ui-carousel";

function Main() {

    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }


    return (
        <div>
            <Typography variant={"h2"}>Kuźnia Olimpijska</Typography>
            <Carouselq {...settings}>

                <Wrap>
                    <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                        <img src="/images/mainPage/slider1.png" alt=""/>
                    </a>
                </Wrap>


                <Wrap>
                    <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                        <img src="/images/mainPage/slider2.png" alt=""/>
                    </a>
                </Wrap>


                <Wrap>
                    <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                        <img src="/images/mainPage/slider3.png" alt=""/>
                    </a>
                </Wrap>


                <Wrap>
                    <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                        <img src="/images/mainPage/slider4.png" alt=""/>
                    </a>
                </Wrap>

            </Carouselq>
        </div>
    );
}



const Carouselq=styled(Carousel)`
  margin-top: 20px;
  
  &>button{

        opacity: 1;
        height: 100%;
        width: 5vw;
        z-index: 0;
        
      
      &:hover{
    
        opacity: 1;
        transition: opacity 0.2s ease 0s;
        
      } 
  }
  
  ul li button{
    &:before{
      font-size: 10px;
      color: rgb(150,150,171);
      
    }
  }

  li.slick-active button:before{
    color: white;

  }
  .slick-list{
    overflow: initial;
    
  }
  .slick-prev{
    left: -20vw;
  }
  .slick-next{
    right: -20vw;
  }

`;

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
      width: 50%;
      height: 50%;
    }
    
    &:hover{
      
        border: 4px  solid rgba(249,249,249,0.8);
        opacity: 0.85;
      
      transition-duration: 300ms;
    }
  }

`;
export default Main;