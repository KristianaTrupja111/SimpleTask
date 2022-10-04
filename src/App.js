import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainBody from "./components/MainBody/MainBody";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
   <NavBar/>
   <MainBody/>
   <CardContainer/>
   <Footer/>
    </div>
  );
}

export default App;
