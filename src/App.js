import React, { Component } from 'react';
import './App.module.css'

import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import resumeData from './resumeData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioData: { portfolio: [] }
    }
  }
  componentDidMount() {
    fetch('./json/portfolio.json')
      .then(e => e.json()).then(e => this.setState({ portfolioData: e }))
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio portfolioData={this.state.portfolioData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;