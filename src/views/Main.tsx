import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import Section from "../components/MainView/Section";
// import Slider from 'react-slick';


function Main() {
    return (
<div>
    <Container>
        <StyledTitle>Kuźnia Olimpijska</StyledTitle>

        <KBackgroundImage src="images/mainPage/bg1.jpg"/>

    </Container>
    <Carousel>

        <Wrap>
            <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                <img src="/images/slider-badging.jpg" alt=""/>
            </a>
        </Wrap>


        <Wrap>
            <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                <img src="/images/slider-scale.jpg" alt=""/>
            </a>
        </Wrap>


        <Wrap>
            <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                <img src="/images/slider-badag.jpg" alt=""/>
            </a>
        </Wrap>


        <Wrap>
            <a href={'https://www.disneyplus.com/pl-pl/brand/disney'}>
                <img src="/images/slider-scales.jpg" alt=""/>
            </a>
        </Wrap>


    </Carousel>




    <Section title={"Hello"}
             description={''} leftButtonText={"yoł"}
             rightButtonText={"start"} modelImageUrl={"images/mainPage/bg2blue.jpg"}/>

</div>


    );
}

export default Main;
const Wrap=styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{

        border-radius: 4px;
        box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
        rgb(0 0 0 /73%) 0 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`;
const MyButton = styled.button`
    color: blue;
    background-color: pink;
    height: 200px;
    width: 200px;
    font-size: 40px;
      
`;

const Carousel=styled.div`
  margin-top: 20px;
  
  &>button{

        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        
      
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
    left: -75px;
  }
  .slick-next{
    right: -75px;
  }

`;

const Container=styled.div`
        
          height: 100vh;
    `;
const KBackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    display: block;
    z-index: -1;
    opacity: 0.7;
      
`;
const KMainImage = styled.img`
    width: 300px;
    height: 300px;
    z-index: 0;
    opacity: 1;
    padding-top: 100px;
      
`;
const StyledTitle = styled.a `
    position: absolute;
    width: 842px;
    height: 146px;
    left: calc(50% - 842px/2);
    top: 91px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 90px;
    /* or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -5.6px;

    color: #000000;`;

const Menu=styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
      
        a{
          font-weight: 600;
          text-transform: uppercase;
          padding: 0 10px;
          flex-wrap: nowrap;
          
          
        }
    
      @media(max-width: 768px){
        display: none;
      }
    
    
    
    `;

const RightMenu=styled.div`
      display: flex;
      align-items: center;
    
      a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
      }
     
    `;


const CustomMenu=styled(MenuIcon)`
        cursor:pointer;
    
    `;

const BurgerNav=styled.div`
      
        position: fixed;
        
        top: 0;
        right: 0;
        bottom: 0;
      
        background: white;
        width: 300px;
        z-index: 16;
        list-style: none;
        padding:20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align:start;
        transition:  0.2s;
      
      li{
        
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
        
        a{
          font-weight: 600;
        }
      
        
        
      }
    `;


const CloseMenu=styled(CloseIcon)`
        cursor: pointer;
   
    `;

const CloseWrapper=styled.div`
          position: fixed;
          justify-content:flex-end;
          padding-left: 240px;
    
    `;