import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Sinta-se à vontade para contatar-me em qualquer dos endereços abaixo.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                {/* <h4>
                  <a href={`mailto:${resumeData.email}`}>
                    <span className="fa fa-envelope"></span> {resumeData.email}
                  </a><br />
                  <span className="fa fa-stack-overflow"></span> {resumeData.email}
                </h4> */}
              </div>
            </aside>
          </div>
        </section>
        );
  }
}