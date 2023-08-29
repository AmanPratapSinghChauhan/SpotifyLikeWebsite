import React from "react";
import Leftpart from "./components/Leftpart.jsx";
import Rightpart from "./components/Rightpart.jsx";
import './App.css';
function App() {
  return (
    <div>
      <div className="fullpart">
        <Leftpart />
        <Rightpart />
      </div>
    </div>
  );
}
export default App;
