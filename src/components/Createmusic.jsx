import React, { useState } from "react";
import ReactDOM from "react-dom";
var prevAudio;
function Createmusic(props){
 return (<div className="song-container">
 <h2>{props.text}</h2>
<audio  className="myAudio" id={props.text}  onPlay={checkStatus} controls  >
  <source  src={props.path} type="audio/mpeg"/>
</audio>
 </div>
 )
function checkStatus(){
  var p=props.text;
  
  for( var i=0;i<props.length+1;i++){
    var x=document.getElementsByClassName('myAudio')[i]; 
    var z=x.id;
    
    if(z==p){
      
    }
    else{
      x.pause();
    }
      
}
}


}
export default Createmusic;