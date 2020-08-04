import React from "react"
import "./imagelinkform.css";

const Imagelinkform = ({inputchange,onbuttonsubmit}) => {
    return(
        <div>
            <p className="f2">{"Welcome. Give our app a try"}</p>
            <div className="center shadow-5 form">
                <input className="f3 ma2 br3 w-70"  type="text" placeholder="Enter URL" onChange={inputchange}/>
                <button className="f3 br3 ma2 w-30 bg-light-purple" onClick={onbuttonsubmit}>{"Detect"}</button>
            </div>
        </div>
    );
}

export default Imagelinkform;