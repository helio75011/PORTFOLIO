import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Set from "./components/Section-Profile/Set/Set";
import Articles from "./components/Section-Profile/Article/Article";
// import Infos from "./components/Section/Infos";
import Project from "./components/Section/Project";
import Section from "./components/Section/Section";
import Company from "./components/Section/Company";
import Contact from "./components/Section-Profile/Contact/Contact";
import './index.css'

function App() {
  return (
    <div className="acceuil">
    <Header></Header>
    <Set></Set>
    <Articles></Articles>
    {/* <Infos></Infos> */}
    <Project></Project>
    <Company></Company>
    <Section></Section>
    <Contact></Contact>
    <Footer></Footer>
</div>
  );
}

export default App;
