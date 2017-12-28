import React from 'react';
import Carousel from 'nuka-carousel';

class SlideShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images : [
                "https://www.tamtam.nl/wp-content/uploads/2015/06/1_header_walibi-1.jpg",
                "https://www.walibi.com/belgium/sites/default/files/walibi_belgium/vampire_02_0.jpg",
                "https://www.walibi.com/belgium/sites/default/files/walibi_belgium/walibi_1208_0.jpg"
            ],
        }
    }
   render() {
        let slideArray = this.state.images;
        let slideRender = [];
        for(let value of slideArray){
            slideRender.push(<img src={value} />);
        }
      return (
          <div>
              <Carousel>
                {slideRender}
              </Carousel>
              <button className="home__button">View Case</button>
              <div className="scroll-down">
                <a href="#about" className="scroll-down__button">
                </a>  
              </div>
          </div>
      );
   }
}

export default SlideShow;