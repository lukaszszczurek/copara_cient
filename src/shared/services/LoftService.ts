import jwtDecode from "jwt-decode";
import {BASE_URL, TOKEN} from "../../properties/CoreProperties";
import axios from "axios";
import LoftType from "../../views/types/LoftType";
export const getLoftData = async (url : string, tokenData : any) : Promise <any> => {

    const urls = `${BASE_URL}/users/lofts/${tokenData.email}`;
    let loftData: LoftType[] = [];
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
                loftData = [...loftData,loft];

            })

            return loftData;
        }).catch(error => console.log("bum " + error));
}

export const getLoftById = async (name : any, token : string | null) : Promise<any> => {

    const urls = `${BASE_URL}/lofts/id/${name}`;
    console.log(`Joł : ${name}`)

    var resp =  await axios.get(urls, {headers : {'Authorization' : 'Bearer ' + token,
            'Access-Control-Allow-Headers': '*','Allow': '*','Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': 'true','Access-Allow-Control-Origin': '*'
        }})
        .then(response => response.data).catch(e => console.log("Filed loft access (get filed)" + e))
    console.log(resp)
    return resp;

}

