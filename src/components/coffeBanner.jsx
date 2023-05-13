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
       
        <a href="https://github.com/lucciii33" target="_blank" className="a_tag-decoration"><span className="separation">Github</span></a>
        <a href="https://www.linkedin.com/in/angelomaiele/" target="_blank" className="a_tag-decoration"><span>Linkedin</span></a>
      </div>
    </>
  );
}

export default CoffeBanner;
