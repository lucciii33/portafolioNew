import { useState, useEffect } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Projects from "./projects"
import CoffeBanner from "./components/coffeBanner";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(scrollPosition < 5){
    console.log("menor a 5 deberia ser rojo")
  }else{
    console.log("mayor a 5 deberia ser azul")
  }


  return (
    <>
    
      <div className={scrollPosition < 2 ? "container" : "container2"}>
        <div className="box1">
          <div className="flex">
            <h4 className="test bio">Hello</h4>
            <img src={hand} className="hand-image"></img>
          </div>
          <div className="">
            <div className="max-width-banner-1">
              <p className="text1">
                I'm Angelo Maiele, a Miami-based software enginer. Most recently
                at Line5 and blueLightTech, I'm weirdly passionate
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
          </div>
          <div className="flex top-margin">
            <div className=" under-border">
              <h3 className="test2">Contact me</h3>
              <img src={email} className="hand-image"></img>
            </div>
          </div>
        </div>

        <div className="box2">
          <div className="circle-hover">
          <a href='#projects-main'><img src={arrow} className="arrow-image"></img></a>
          </div>
        </div>
        <Projects/>
        <CoffeBanner/>
      </div>
    </>
  );
}

export default App;
