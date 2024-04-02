import React from 'react';
import {CardMedia} from "@mui/material";
import styled from "styled-components";

function AboutTutor() {
    return (
        <Container>
            <h1>About Tutor</h1>
            <CardMedia image={'/images/mainPage/tutor.jpeg'} component={'img'} alt={'tutor'}
            sx={{width: '10vw', height: '10vh', margin: 'auto', display: 'block', borderRadius: '50%', marginTop: '20px'
            }}
          />

        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    `;

export default AboutTutor;