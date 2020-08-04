import React from "react"
import "./facerecognition.css"

const Facerecognition = ({imageurl,box}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" alt="" src={imageurl} width="500px" height="auto"/>
                <div className="bounding_box" style={{top:box.topcord, right:box.rightcord,bottom:box.bottomcord,left:box.leftcord}}></div>
            </div>
        </div>
    );
}

export default Facerecognition;