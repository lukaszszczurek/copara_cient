import axios from "axios";
import {AsyncHook} from "async_hooks";
import jwtDecode from "jwt-decode";

export const getTokenData = (token : string | null) : any => {
    if (token === null) return null;
    console.log(jwtDecode(token.toString()));
    return jwtDecode(token.toString());
}

export const getUserData = async ( url : string , token : null | string) : Promise <any> => {
    console.log("Inget" + url);
    console.log("Inget" + token);
    var a = await axios.get(url,{headers: {'Authorization': 'Bearer ' + token,
            'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*','Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
        }}).then(response => response.data).catch(error => console.log(error));
    console.log(a);
    return a;
}