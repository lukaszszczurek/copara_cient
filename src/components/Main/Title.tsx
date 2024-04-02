import React from 'react';
import {Typography} from "@mui/material";
import styled from "styled-components";

function Title({name}: {name: string}) {
    return (
        <Container>
            <Typography
            // make cool title styled typgraphy sx
                sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    marginBottom: "20px",
                    marginTop: "20px",
                }}
            >{name}</Typography>
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
    background-image: url("images/mainPage/slider1.png");
    `;

export default Title;