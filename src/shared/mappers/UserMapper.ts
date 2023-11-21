// map response from api to user model
import {UserInterface} from "./Imappers/UserInterface";

export const mapUser = (user : UserInterface) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        photoUrl: user.photoUrl,
        loftIds: user.loftIds
    };
}