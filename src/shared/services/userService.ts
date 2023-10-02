
import axios from "axios";
import {AsyncHook} from "async_hooks";
import jwtDecode from "jwt-decode";
import {BASE_URL, TOKEN} from "../../properties/CoreProperties";

// const getUserData = async (url : string, TOKEN : string | null ) : Promise <any> => {
//     console.log(TOKEN)
//    // const Url = BASE_URL + "/users/";
//     return await axios.get(Url +tokenData.sub,{headers: {'Authorization': 'Bearer ' + TOKEN,
//             'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*','Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
//         }}).then(response => setData(response.data)).catch(error => console.log("pip"));
// }

export const getTokenData = (token : string | null) : any => {
    if (token === null) return null;
    return jwtDecode(token.toString());
}

export const getUserData = async (url : string, tokenData : any) : Promise <any> => {
    console.log(TOKEN)
    return await axios.get(url + tokenData.sub,{headers: {'Authorization': 'Bearer ' + TOKEN,
            'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*','Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
        }}).then().catch(error => console.log(`Failed at trying get user data with error:  ${error}`));
}