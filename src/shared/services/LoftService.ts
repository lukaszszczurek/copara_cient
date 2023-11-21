import jwtDecode from "jwt-decode";
import {BASE_URL, TOKEN} from "../../properties/CoreProperties";
import axios from "axios/index";
import LoftType from "../../types/LoftType";
import {useState} from "react";

export const getLoftData = async (url : string, tokenData : any) : Promise <any> => {
    const urls = BASE_URL + `/users/lofts/${tokenData.email}`;
    //let loftData: LoftType[] = [];

    const [loftData, setLoftData] = useState<LoftType[]>([]);

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
                setLoftData(loftData => [...loftData, loft])

            })

            return loftData;
        }).catch(error => console.log("bum " + error));
}