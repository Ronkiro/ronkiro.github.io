import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Dê uma olhada em alguns dos meus trabalhos.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                portfolioData.portfolio && portfolioData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap item-size">
                        <a onClick={this.stopPropag} href={`${item.imgurl}`}>
                          <img alt="Project" src={`${item.imgurl}`} style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)"
                          }}
                            className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}