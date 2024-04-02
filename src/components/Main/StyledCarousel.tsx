import React from 'react';
import {CardContent, CardMedia, Typography} from "@mui/material";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

function StyledCarousel() {
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
            <CarouselS {...settings}>

                <div>
                    <CardMedia
                        component="img"
                        height="20%"
                        image="images/mainPage/slider1.png"
                        alt="Paella dish"
                    >
                    </CardMedia>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </div>


                <div>
                    <CardMedia
                        component="img"
                        height="20%"
                        image="images/mainPage/slider2.png"
                        alt="Paella dish"
                    >
                    </CardMedia>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </div>

                <div>
                    <CardMedia
                        component="img"
                        height="20%"
                        image="images/mainPage/slider3.png"
                        alt="Paella dish"

                    >
                    </CardMedia>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </div>

                <div>
                    <CardMedia
                        component="img"
                        height="20%"
                        image="images/mainPage/slider4.png"
                        alt="Paella dish"
                    >
                    </CardMedia>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                </div>
            </CarouselS>
        </div>
    );


}

const CarouselS = styled(Carousel)`
    margin-top: 20px;

    & > button {

        opacity: 1;
        height: 100%;
        width: 5vw;
        z-index: 0;

        &:hover {

            opacity: 1;
            transition: opacity 0.2s ease 0s;

        }
    }

    ul li button {
        &:before {
            font-size: 10px;
        }
    }

    li.slick-active button:before {
        color: white;

    }

    .slick-list {
        overflow: initial;

    }

    .slick-prev {
        left: -20vw;
    }

    .slick-next {
        right: -20vw;
    }

`;

export default StyledCarousel;