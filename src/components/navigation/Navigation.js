import React from "react"

const Navigation = ({onRoutechange,isSignedin}) => {
    if(isSignedin)
        return(<nav style={{display : "flex", justifyContent : "flex-end" }}>
            <p onClick={() => onRoutechange("signin")} className="f3 pa3 link blue dim underline pointer grow">{"Sign Out"}</p>
        </nav>);
    else 
    return(
        <nav style={{display : "flex", justifyContent : "flex-end" }}>
            <p onClick={() => onRoutechange("signin")} className="f3 pa3 link blue dim underline pointer grow">{"Sign In"}</p>
            <p onClick={() => onRoutechange("register")} className="f3 pa3 link blue dim underline pointer grow">{"Register"}</p>        
        </nav>
    );    
    
}

export default Navigation;