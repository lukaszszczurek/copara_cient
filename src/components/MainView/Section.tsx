import React from 'react';
import styled from "styled-components";
import {CardMedia, Fade} from "@mui/material";

interface SectionProps {
    title: string;
    description: any;
    leftButtonText: string;
    rightButtonText: string;
    modelImageUrl: any; // Adjust type if necessary
}
function Section({title,description,leftButtonText,rightButtonText,modelImageUrl} : SectionProps) {
    const [isVisible, setIsVisible] = React.useState(false);
    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <Wrap imgUrl={modelImageUrl}>
            {/*<Fade in={isVisible} timeout={1000}>*/}
                <ItemText>

                    <h1> {title}</h1>
                    <p>{description}</p>
                </ItemText>
            {/*</Fade>*/}
            <Buttons>
                {/*<Fade in={isVisible} timeout={1000}>*/}
                <CardMedia rev={modelImageUrl} component="img" image={modelImageUrl} style={{width: "100px"}}/>

                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {
                            rightButtonText &&
                            <RightButton>

                                {rightButtonText}
                            </RightButton>

                        }
                    </ButtonGroup>
                {/*</Fade>*/}
            </Buttons>
        </Wrap>

    );
}

const Wrap=styled.div<{imgUrl: string}>`
    width: 100vw;
    height: 80vw;
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    background-image: url(${props => props.imgUrl});
  
  //background-image:url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; //horizontal
`;

const ItemText=styled.div`
    padding-top:  15vh;
    text-align: center;
`;

const ButtonGroup=styled.div`
  
  @media (max-width: 768px){
    flex-direction: column;
  }
    display: flex;
  margin-bottom: 30px;
`;

const  LeftButton=styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width:256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor:pointer;
  margin: 8px;
  
  


`;

const RightButton=styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;

`;


const DownArrow=styled.img`

    margin-top: 10px;
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x:hidden;
    
`;


const Buttons=styled.div`
    
    justify-content: center;
`;

const Arrow=styled.div`
  justify-content: center;
  display: flex;
    
    `;



export default Section;