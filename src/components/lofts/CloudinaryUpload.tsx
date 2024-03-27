import React, {useState} from 'react'
// Cloudinary is used to configure your account and generate urls for your media assets
import {Cloudinary} from "@cloudinary/url-gen/instance/Cloudinary";
// Import the cloudinary media component (AdvancedImage / AdvancedVideo),
// and the plugins you want to use.
import { accessibility, responsive, AdvancedVideo} from "@cloudinary/react";
import {CardMedia} from "@mui/material";
import {upload} from "@testing-library/user-event/dist/upload";
import axios, {Axios} from "axios";


function CloudinaryUpload () {
    const myCld = new Cloudinary({cloud: {cloudName: 'dhrbc55vx'}});

    const [fileDetails, setFileDetails] : any = useState();
    const [sended, setSended] : any = useState("false");
    // Create a new image object:
    const video = myCld.video('eotu4untq03c7naorfne')

    const uploadMovie = () => {
        const fromData = new FormData();
        if (fileDetails) {
            fromData.append("file", fileDetails[0]);
        }
        fromData.append("upload_preset","oefkafkh");
        fromData.append("resource_type","video");
        // chunked upload
        fromData.append("chunk_size", "6000000");



        //  fetch("https://api.cloudinary.com/v1_1/dhrbc55vx/video/upload", formDa)
        axios.post("https://api.cloudinary.com/v1_1/dhrbc55vx/file/upload", fromData).then((resp) =>{
            setSended("true")
        })
    }


    // Render your component.
    return (
        <div>
            {/*<AdvancedImage cldImg={img} plugins={[responsive(), accessibility()]}/>*/}
            <AdvancedVideo  cldVid={video} plugins={[responsive(), accessibility()]} controls={true}/>
            {/*<video src={'https://res.cloudinary.com/dhrbc55vx/video/upload/v1709129955/eotu4untq03c7naorfne.mkv'}/>*/}
            {/*<input type={"file"} onChange={(event)=> {*/}
            {/*    setFileDetails(event.target.files)}}/>*/}

            {/*<button onClick={uploadMovie}>Submit</button>*/}

            <h1>Hi</h1>


        </div>
    )


};
export default CloudinaryUpload;