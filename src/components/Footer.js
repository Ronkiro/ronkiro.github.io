import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let showReturn = (this.props.showReturn == undefined)? true : this.props.showReturn;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <a href="https://ronkiro.github.io/tools/"><u>Ferramentas</u></a>
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        { showReturn && <div id="go-top"><a className="smoothscroll" title="Voltar ao topo" href="#home"><i className="icon-up-open" /></a></div> }
      </div>
    </footer>
    );
  }
}