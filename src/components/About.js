import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  {/* <img className="profile-pic" src="images/profilepic.png" alt="" /> */}

               </div>

               <div className="nine columns main-col">

                  <h2>Sobre mim 👤</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Conquistas 🏆</h2>
                        <p className="address">
                           {
                              resumeData.awards.map(item => (
                                 <div>- {item}<br /></div>
                              ))
                           }
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}