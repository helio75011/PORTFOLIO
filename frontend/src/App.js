import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Infos from "./components/Section/Infos";
import Project from "./components/Section/Project";
import Section from "./components/Section/Section";
import Company from "./components/Section/Company";
import './index.css'

function App() {
  return (
    <div className="acceuil">
    <Header></Header>
    <Infos></Infos>
    <Project></Project>
    <Company></Company>
    <Section></Section>
    <Footer></Footer>
</div>
  );
}

export default App;
