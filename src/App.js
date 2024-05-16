import React from "react";
import './App.css';
import Header from "./components/Header"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import Footer from "./components/Footer"

class App extends React.Component{
    render(){
       return(
       <div className="container1">
       <Header/>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <Footer/>
       </div>
       )
    }
}

export default App;
