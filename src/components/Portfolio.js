import React, { Component } from "react";
import Carousel, { arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from 'react-fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

export default class Porfolio extends Component {
  handleDblClick(project) {
    window.open(project.link, '_blank');
  }

  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Dê uma olhada em alguns dos meus trabalhos. 👀</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >

              <Carousel
                plugins={[
                  "infinite",
                  {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: <Icon className="carousel-btn" name="angle-double-left" size="2x"  />,
                      arrowLeftDisabled:<Icon className="carousel-btn" name="angle-left" size="2x"  />,
                      arrowRight: <Icon className="carousel-btn carousel-btn-reverse" name="angle-double-right" size="2x" />,
                      arrowRightDisabled: <Icon className="carousel-btn carousel-btn-reverse" name="angle-right" size="2x" />,
                      addArrowClickHandler: true,
                    }
                  },
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ]}
                offset="20"
                itemWidth="300"
              >
                { portfolioData.portfolio && portfolioData.portfolio.map((project, index) => <div>
                    <LazyLoadImage delayMethod="debounce" key={`${index}`} src={project.imgurl} alt="A project" />
                    <div className="info-msg" onDoubleClick={() => this.handleDblClick(project)}>
                      <p>{project.name}</p>
                      <p>{project.description}</p>
                    </div>
                  </div>
                )}
              </Carousel>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}
