import React, { Component } from "react";

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import resumeData from "./resumeData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioData: { portfolio: [] },
    };
  }
  componentDidMount() {
    fetch("./json/portfolio.json")
      .then((e) => e.json())
      .then((e) => this.setState({ portfolioData: e }));
  }

  render() {
    return (
      <>
        <div className="manutencao">
          <div style={{
            position: "absolute",
            top: "30%",
            textAlign: "center",
            fontSize: "2rem",
            width: "100%"
          }}>
            <i className="fa fa-wrench fa-4x" />
            <br />
            Olá, eu sou Alexander.
            <br />
            Peço desculpas, mas por hora este website está em manutenção.<br />
            Inicie por algum dos perfis abaixo.
            <Footer resumeData={resumeData} showReturn={false} />
          </div>
        </div>
        <div className="App">
          <Header resumeData={resumeData} />
          <About resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          <Portfolio portfolioData={this.state.portfolioData} />
          <Testimonials resumeData={resumeData} />
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </div>
      </>
    );
  }
}

export default App;
