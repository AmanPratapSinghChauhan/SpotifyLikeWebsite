import React from "react";
function Leftpart() {
  return (
    <div className="leftpart">
      <nav>
        <ul className="navul">
          <li>
            <img className="setImg" src="/Icons/logo.png" alt="spotify" />
          </li>
          <li>
            <h1>Spotify</h1>
          </li>
        </ul>
      </nav>
      <ul className="nul">
        <li>
          <a href="">
            <img src="/Icons/home.png" /> <div>Home</div>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <img src="/Icons/search.png" /> <div>Search</div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="/Icons/library.png" /> <div>Your Library</div>
          </a>
        </li>
      </ul>
      <ul className="nul">
        <li>
          <a href="">
            {" "}
            <img src="/Icons/create.png" />
            <div> Create Playlist</div>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <img src="Icons/like.png" /> <div>Liked Songs</div>
          </a>
        </li>
      </ul>
      <hr></hr>
      <footer>
        <img src="/Icons/install.png" /> Install App
      </footer>
    </div>
  );
}
export default Leftpart;
