import React from "react";
import Music from "../music.js";
import Createmusic from "./Createmusic.jsx";
function Rightpart() {
  function Assignvalue(value) {
    return <Createmusic text={value.text} path={value.path} length={4} /> ;
  }
  return (
    <div className="rightpart">
    <nav className="nav-mob">
      <h1>Spotify</h1>
    </nav>
    <nav className="nav-bar">
       <ul className="nav-bar-ul">
        <li ><a href="#">Premium</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Download</a></li>
        <li><a href="#">|</a></li>
        <li><a href="#">Sign up</a></li>
        <li> <a href="#"><button>Log in</button></a></li>
       </ul>
    </nav>
      <div class='musicpart' >
      {Music.map(Assignvalue)}
    </div>
    </div>
    
  );
}
export default Rightpart;
