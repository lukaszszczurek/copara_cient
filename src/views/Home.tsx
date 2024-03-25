import React, {useEffect, useRef} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import LoftType from "./types/LoftType";
import styled from "styled-components";
import {BASE_URL, TOKEN} from "../properties/CoreProperties";
import {getTokenData, getUserData} from "../shared/services/userService";

function Home() {

    const tokenData = getTokenData(TOKEN);
    const [data, setData] = React.useState<any>([]);
    const [loftData, setLoftData] = React.useState<LoftType[]>([]);
    const [viewLoft, setViewLoft] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("a@.pl");
    const loftUrl = BASE_URL + `/users/lofts/${tokenData.email}`;
    const [userFetched, setUserFetched] = React.useState<boolean>(false);
    const getLoftData = async () : Promise <any> => {

        const urls = BASE_URL + `/users/lofts/${tokenData.sub}`;

        await axios.get(urls, {headers: {'Authorization': 'Bearer ' + TOKEN}})
            .then(response => {
                setLoftData(response?.data);
                setViewLoft(true);

            }).catch(error => console.log(error));
    }

    const getUserData = async (url: string) : Promise<any> => {
        const response =   await axios.get(url, {headers: {
        'Authorization': 'Bearer ' + TOKEN}});

        setData(response.data);

    }

    useEffect(() => {

        getUserData(BASE_URL + "/users/" + tokenData.sub);
      
    }, [userFetched]);

    return (

        <Container>
            Heloo

            {/*<Cont>*/}
            {/*    <Button variant="contained" color="primary" sx={{margin: 1 }} onClick={getLoftData}>*/}
            {/*        Get Lofts</Button>*/}

            {/*    {viewLoft ? (*/}

            {/*        <div>*/}
            {/*            {loftData.map((l) => (*/}
            {/*                <LoftMenuElement key={l.id} href={`/mylofts/${l.name}`}>{l.name}</LoftMenuElement>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    ) : (*/}
            {/*        <h1>no</h1>*/}
            {/*    )}*/}
            {/*</Cont>*/}

            {/*<MainView>*/}
            {/*    <h1>Home1</h1>*/}

            {/*    <h2>{data?.email}</h2>*/}

            {/*    <img style={{"height":"10%", "width":"10%" }} src={data.photoUrl} alt="xd" />*/}
            {/*    /!*<h6>{TOKEN}</h6>*!/*/}
            {/*    <p>s</p>*/}
            {/*    <h4>6475d3fbb2d2607af1f87ca5</h4>*/}


            {/*    <Button variant="contained" color="primary" onClick={getLoftData}>*/}
            {/*        Get Lofts</Button>*/}

            {/*    {viewLoft ? (*/}
            {/*        <div>*/}
            {/*            {loftData?.map((l) => (*/}
            {/*                <h1 key={l.id}>{l.name}</h1>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <h1>no</h1>*/}
            {/*    )}*/}

            {/*</MainView>*/}

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
