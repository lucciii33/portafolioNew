import { useState } from "react";
import coffee from "../assets/coffee-mug.png"

import "../coffe.css";

function CoffeBanner() {


  return (
    <>
      <div className="container-coffe" >
      <img src={coffee} className="coffee-img"></img>
        <h3>Let's chat.</h3>
        <p className="text1">want to see more work? talk about design?<br/>
        tell me all about the latest conspiracy theories?</p>
       
        <span className="separation">Github</span>
        <span>Linkedin</span>
      </div>
    </>
  );
}

export default CoffeBanner;
