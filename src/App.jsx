import { useState } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Projects from "./projects"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        
        <div className="box1">
          <div className="flex">
            <h4 className="test bio">Hello</h4>
            <img src={hand} className="hand-image"></img>
          </div>
          <div className="flex">
            <div>
              <p className="text1">
                I'm Luenne Neri, a NYC-based Sr. Product Designer. Most recently
                at Twitter, previously at Work & Co. I'm weirdly passionate
                about both design systems and trust & safety matters. And as
                someone with a multidisciplinary background, I love bringing
                different philosophies into the design process.
              </p>
              <p className="text1">
                I like working with products I care about, where teams are
                diverse, people are excited about solving problems, and the
                coffee is good.
              </p>
            </div>
            <div className="transparent"></div>
          </div>
          <div className="flex top-margin">
            <div className=" under-border">
              <h3 className="test2">Contact me</h3>
              <img src={email} className="hand-image"></img>
            </div>
          </div>
        </div>

        <div className="box2">
          <img src={arrow} className="arrow-image"></img>
        </div>
        <Projects/>
      </div>
    </>
  );
}

export default App;
