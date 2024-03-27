import React, {useEffect, useState} from 'react';
import {useHref, useNavigate, useParams} from "react-router-dom";
import {TOKEN} from "../../properties/CoreProperties";
import {Button, Card, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from "@mui/material";
// import {Android, Code, Html} from "@mui/icons-material";
import styled from "styled-components";
import CloudinaryUpload from "./CloudinaryUpload";

function LoftHomeView(props:any) {

    let {id } = useParams();
    const history = useNavigate();

    const [loftData, setLoftData] = useState<any>()
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    useEffect(() =>{


        // fetch(`http://localhost:8080/api/v1/lofts/id/${id}`, {
        //     headers: { 'Authorization': 'Bearer ' + TOKEN }
        // }).then(response => {
        //         if(response.ok){
        //             return response.json();
        //
        //         }
        //         throw new Error("Failed to fetch data");
        //         history("/home");
        //
        //
        //     }
        // ).then(data => {
        //     setLoftData(data);
        // }).catch(error => {
        //     console.log(error);
        //     history("/home");
        // })
        // const fetchData = async () => {
        //
        //
        //        // history("/home")
        //     });


        // };

        //   fetchData();


//        fetchData();

    },[id])
    return (
        <Container>

            <MenuContainer>

                <Button sx={{zIndex:"5"}}
                        onClick={() => setOpenMenu(!openMenu)}> clos
                </Button>



                {openMenu ? (
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon onClick={() => console.log("Hey")}>
                                {/*<Android fontSize="small" />*/}
                            </ListItemIcon>
                            <ListItemText>
                                {loftData?.name} course
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                {/*<Html fontSize="small" />*/}
                            </ListItemIcon>
                            <ListItemText>
                                Community
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                {/*<Code />*/}
                            </ListItemIcon>
                            <ListItemText>
                                Storage
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                {/*<Android fontSize="small" />*/}
                            </ListItemIcon>
                            <ListItemText onClick={() => history("/home")}>
                                Home
                            </ListItemText>
                        </MenuItem>
                    </MenuList>
                ) : null}
            </MenuContainer>
            <h1>
                h1 {loftData?.name}
            </h1>
            <CardMedia src={""}>
            </CardMedia>

            <CloudinaryUpload/>


        </Container>
    );
}

export default LoftHomeView;

const Container = styled.div`
    
    
    
    
`;

const MenuContainer = styled.div`
    position: fixed;
    

    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding-top: 45px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align:start;
    opacity: 0.8;
   
    transition:  0.2s;
`;