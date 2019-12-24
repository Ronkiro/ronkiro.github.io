import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Mostrar navegação">Mostrar navegação</a>
            <a className="mobile-btn" href="#" title="Ocultar Navegação">Ocultar Navegação</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Início</a></li>
              <li><a className="smoothscroll" href="#about">Sobre</a></li>
              <li><a className="smoothscroll" href="#resume">Jornada</a></li>
              <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
              {resumeData.testimonials && <li><a className="smoothscroll" href="#testimonials">Depoimentos</a></li>}
              <li><a className="smoothscroll" href="#contact">Contato</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Eu sou {resumeData.name}.</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                Eu sou {resumeData.role}. <br />
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}