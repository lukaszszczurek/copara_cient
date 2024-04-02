import React from 'react';
import {CardMedia} from "@mui/material";
import styled from "styled-components";
import {Certificate} from "node:crypto";

function AboutTutor() {
    return (
        <Container>
            <h1>About Tutor</h1>

            <CardMedia
                component="img"
                height="10%"
                image="images/mainPage/tutor.jpeg"
                alt="Paella dish"
                // style image make it smaller
                sx={{width: "30%",
                    height: "30%",
                    borderRadius: "50%",
                    margin: "auto",
                    display: "block",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    marginBottom: "20px"}}
            />
            <p>My name is John Doe and I am a tutor. I have been teaching for 10 years. I have a degree in Computer
                Science and I am a certified teacher. I have taught over 1000 students and I have helped them achieve
                their goals. I am passionate about teaching and I love to help students learn. I believe that every
                student has the potential to succeed and I am here to help them reach their full potential. I am
                dedicated to providing the best education possible and I am committed to helping students succeed.</p>

            <CardMedia component={"img"} height={"10%"} image={"images/mainPage/certificate.jpg"} alt={"certificate"}
            // make hover effect
            sx={{width: "60%",
                height: "60%",
                borderRadius: "50%",
                margin: "auto",
                display: "block",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "20px",
                "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                }
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
    display: inherit;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    `;

export default AboutTutor;