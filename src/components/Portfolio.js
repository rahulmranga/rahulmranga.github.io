import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
  
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">  
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return( 
                <div className="columns portfolio-item">
                  <a href={item.imgurl}>
                  <div className="item-wrap image">
                    <div className='title'>{item.name}</div>
                    <p className='text-description'>{item.description}</p>
                      </div>
                      </a>
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