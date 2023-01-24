import React from "react";
import "./index.scss";

function Learn() {
  return (
    <>
      <div className="mainIm">
        <div className="mainSec">
          <div className='secWord'>
            <h2>Learn From The Expert</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <button className='btnone'>ADMISSION NOW</button>
          </div>
          <div className="mainInp">
            <div className="inp">
              <p style={{color:"black", fontSize:"30px" }} >Sing up</p>
              <input style={{width:"350px", height:"40px" }} type={"text"} placeholder={"Email Adress"}></input>
              <br></br>
              <input style={{width:"350px", height:"40px" }} type={"text"} placeholder={"Password"}></input>
              <br></br>
              <input style={{width:"350px", height:"40px" }} type={"text"} placeholder={"Re-type Password"}></input>
              <br></br>
              <button className='btn'>SING UP</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
