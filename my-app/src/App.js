import React,{useState} from "react"
import images from "./images";
import "./App.css";

function App() {

  const[selectedİmg,setSelectedİmg]=useState(images[0])

  return (
    <div className="App">
      <div className="container">
        <img
          src={selectedİmg}
          alt="Selected"
          className="selected"
        />
      </div>

      <div className="imgContainer">
        {images.map((img,index)=>(
          <img key={index} src={img} alt="tantuni"
          onClick={()=>setSelectedİmg(img)} />
        ))}
        
      </div>
    </div>
  );
}
export default App;
