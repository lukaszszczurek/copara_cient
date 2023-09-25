import React, {useEffect, useRef} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import {Button} from "@mui/material";
import LoftType from "../types/LoftType";
import loftType from "../types/LoftType";
import styled from "styled-components";

function Home() {
    //  get  respose from path /api/v1/users/{email}
    const URL_BASE = 'http://localhost:8080/api/v1';
    const TOKEN = localStorage.getItem("jwtToken");

    // create function to get token from local storage and decode it
    const getTokenData =() : any => {
        const token = localStorage.getItem("jwtToken");
        if (token === null) return null;
        const tokenData = jwtDecode(token.toString());
        return tokenData;
    }

    const tokenData = getTokenData();
    const [data, setData] = React.useState<any>("");
    const [loftData, setLoftData] = React.useState<LoftType[]>([]);
    const [viewLoft, setViewLoft] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("a@.pl");

    const getUserData = async (url : string) : Promise <any> => {
        console.log(TOKEN)
        const Url = URL_BASE + "/users/";
        return await axios.get(Url +tokenData.sub,{headers: {'Authorization': 'Bearer ' + TOKEN,
            'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*','Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
            }}).then(response => setData(response.data)).catch(error => console.log("pip"));
    }

    const  getLoftData = async () : Promise <any> => {
        const urls = URL_BASE + `/users/lofts/${data.email}`;

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

            getUserData(URL_BASE + "/users/" ).then(response => setData(response.data)).catch(error => console.log("useEffect isue"));
        console.log(data.email + "data")
      
    }, [data]);

    return (

        <Container>

            <Cont>
                <h1>Home1</h1>
            </Cont>

            <MainView>
                <h1>Home</h1>

                <h2> {data.email}</h2>

                <img style={{"height":"10%", "width":"10%" }} src={data.photoUrl} alt="xd" />
                {/*<h6>{TOKEN}</h6>*/}
                <p>s</p>
                <h4>6475d3fbb2d2607af1f87ca5</h4>


                <Button variant="contained" color="primary" onClick={getLoftData}>
                    Get Lofts</Button>

                {viewLoft ? (
                    <div>
                        {loftData.map((l) => (
                            <h1 key={l.id}>{l.name}</h1>
                        ))}
                    </div>
                ) : (
                    <h1>no</h1>
                )}

            </MainView>

        </Container>
    );
}
export default Home;

const Container = styled.div`

  min-height: 100vh;
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
