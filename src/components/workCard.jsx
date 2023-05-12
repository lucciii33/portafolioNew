import { useState } from "react";


import "../projects.css";

function WorkCard({title, description, time}) {


  return (
    <>
      <div className="test-width" >
        <div>
            <h2>{title}</h2>
            <p className="text1">{description}</p>
        </div>

        <div className="workCard-image">
            <p>Image here</p>
        </div>

        <div className="flex-2">
            <div>
                <h2>timeline</h2>
                <p className="text1">{time}</p>
                <h2>Lenguajes</h2>
                <p className="text1">Next.js, chakraUi, <br/>redux, express, node.js mongodb</p>
            </div>

            <div className="max-width">
            <h2>overview</h2>
            <p className="text1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  cillum dolore eu fugiat nulla pariatur. </p>
            <p>check project</p>
            </div>

        </div>
       <br/>
       <br/>
       <br/>
      </div>
    </>
  );
}

export default WorkCard;
