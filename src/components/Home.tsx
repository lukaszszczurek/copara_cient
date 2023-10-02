import React, {useEffect, useRef} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import {Button} from "@mui/material";
import LoftType from "../types/LoftType";
import loftType from "../types/LoftType";
import styled from "styled-components";
import {BASE_URL, TOKEN} from "../properties/CoreProperties";
import {getTokenData, getUserData} from "../shared/services/userService";

function Home() {

    const tokenData = getTokenData(TOKEN);
    const [data, setData] = React.useState<any>("");
    const [loftData, setLoftData] = React.useState<LoftType[]>([]);
    const [viewLoft, setViewLoft] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("a@.pl");

    // const getUserData = async (url : string) : Promise <any> => {
    //     console.log(TOKEN)
    //     const Url = BASE_URL + "/users/";
    //     return await axios.get(Url + tokenData.sub,{headers: {'Authorization': 'Bearer ' + TOKEN,
    //         'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*','Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
    //         }}).then(response => setData(response.data)).catch(error => console.log("pip"));
    // }

    const  getLoftData = async () : Promise <any> => {
        const urls = BASE_URL + `/users/lofts/${data.email}`;

        await axios.get(urls, {headers: {'Authorization': 'Bearer ' + TOKEN}})
            .then(response => {

                response.data.forEach((l : any) => {
                    const loft : LoftType = {
                        id: l.id,
                        name: l.name,
                        description: l.description,
                        photoUrl: l.photoUrl,
                        ownerId: l.ownerId,
                        userIds: l.userIds
                    }

                    setLoftData(arr => [...arr, loft]);
                    setViewLoft(true);

                })
            }).catch(error => console.log("bum " + error));
    }

    useEffect(() => {

        let userData =  getUserData(  `${BASE_URL}/users/lofts/${data.email}`, tokenData)
        setData(userData)

            // setData
         // (
         //     getUserData(  `${BASE_URL}/users/lofts/${data.email}`, tokenData)
         // )


             // getUserData(BASE_URL + "/users/" ).then(response => setData(response.data)).catch(error => console.log("useEffect isue"));
        console.log(data.email + "data")
      
    }, [data]);

    return (

        <Container>

            <Cont>
                <Button variant="contained" color="primary" sx={{margin: 1 }} onClick={getLoftData}>
                    Get Lofts</Button>

                {viewLoft ? (
                    // <LoftMenuElement>
                    <div>
                        {loftData.map((l) => (
                            <LoftMenuElement key={l.id} href={"/mylofts/${l.id}"}>{l.name}</LoftMenuElement>
                        ))}
                    </div>
                    // </LoftMenuElement>

                ) : (
                    <h1>no</h1>
                )}
            </Cont>

            <MainView>
                <h1>Home</h1>

                <h2> {data.email}</h2>

                <img style={{"height":"10%", "width":"10%" }} src={data.photoUrl} alt="xd" />
                {/*<h6>{TOKEN}</h6>*/}
                <p>s</p>
                <h4>6475d3fbb2d2607af1f87ca5</h4>




            </MainView>

        </Container>
    );
}
export default Home;

const Container = styled.div`

  //min-height: 100vh;
  border: #075016 1px solid;
`;

const Cont = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width:250px;
`;

const MainView = styled.div`
    align-content: center;
    display: block;
    align-items: center;
    border: #075016 1px solid;
`;

const LoftMenuElement = styled.a`

    font-size: 20px;
    text-decoration: none;
    font-family: sans-serif;
    color: #282c34;
  &:hover{
    cursor: pointer;
    scale: 1.05;

  }


`;
