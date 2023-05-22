import { useState } from "react";
import coffee from "../assets/coffee-mug.png"

import "../coffe.css";

function CoffeBanner({scrollPosition}) {


  return (
    <>
      <div className="container-coffe" >
      <img src={coffee} className="coffee-img"></img>
        <h3>Let's chat.</h3>
        <p className="text1">want to see more work?<br  className="d-mobile"/> talk about code?<br/>
        tell me all about the <br className="d-mobile"/>latest conspiracy theories?</p>
       
        <a href="https://github.com/lucciii33" target="_blank"  className={scrollPosition < 2 ? "a_tag-decoration" : "a_tag-decoration2"}><span className="separation">Github</span></a>
        <a href="https://www.linkedin.com/in/angelomaiele/" target="_blank" className={scrollPosition < 2 ? "a_tag-decoration" : "a_tag-decoration2"}><span>Linkedin</span></a>
      </div>
    </>
  );
}

export default CoffeBanner;
