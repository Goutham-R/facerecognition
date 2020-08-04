import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Imagelinkform from "./components/imagelinkform/Imagelinkform"
import Particles from 'react-particles-js';
import particleparams from "./particlesjs-config.json";
import Facerecognition from "./components/facerecognition/Facerecognition"; 
import Signin from "./components/signin/Signin"; 
import Clarifai from "clarifai";
import Register from './components/register/Register';

const app = new Clarifai.App({
  apiKey: 'c0a93942c1af44da90cb290cbf183740'
 });



class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      input : "",
      imageurl : "",
      box : {},
      route : "signin",
      isSignedin : false
    }
  }


  oninputchange = (event) => {
    this.setState({input : event.target.value});
  }

  onImage = (boxcord) => {
    console.log(boxcord);
    this.setState({box : boxcord});
  }

  calculateFaceLocation = (data) =>{
    const Clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftcord : Clarifaiface.left_col *width ,
      rightcord : width - Clarifaiface.right_col *width,
      topcord : Clarifaiface.top_row *height,
      bottomcord : height - Clarifaiface.bottom_row *height 
    }
  } 

  onbuttonsubmit = () => {
    this.setState({imageurl : this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.onImage(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRoutechange =(route) => {
    if(route === "home"){
      this.setState({isSignedin : true})
    }
    else {
      this.setState({isSignedin : false})
    }
    this.setState({route : route});
  }

  conditions = () => {
    if(this.state.route === "home")
      return(
        <div><Logo />
              <Imagelinkform inputchange={this.oninputchange} onbuttonsubmit={this.onbuttonsubmit}/>
              <Facerecognition imageurl={this.state.imageurl} box={this.state.box}/>
              </div>
      )
    else if(this.state.route === "signin")
    return(
        <Signin onRoutechange={this.onRoutechange}/>
    )
    else
    return(
      <Register onRoutechange={this.onRoutechange} />
    )      
  }

  render(){
    return(
      <div>
          <div className="App">            
            <Particles params={particleparams} className="particles"/>
            <Navigation onRoutechange={this.onRoutechange} isSignedin={this.state.isSignedin} />
            {this.conditions()}
          </div>
      </div>    
    );
  }
    
}

export default App;
