import React from 'react';
class InstaFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images : [
                {
                    text : 'Dank u Sinterklaasje! #deptagency #tonychocolonely #tamtam #pieterbaas @doart',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e35/24327255_269583513567880_5450060301711966208_n.jpg"
                },{
                    text : 'TamTam nr. 1 digital agency of the year! #fonk #top50 #fonkingvet',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e15/24175225_156838701594955_7784726978183036928_n.jpg"
                },{
                    text : 'Raise your glasses for 13 Lovie Awards 🤓! #tamtam #afom #studiodumbar #deptagency #tamtamhome',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e35/23734607_505975863105621_8162394954442735616_n.jpg"
                },{
                    text : 'This office is on fire 🎶😆🔥 #aliciakeys #firedrill #safetyfirst #deptagency',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e35/22220884_1835427853152710_6535921226341154816_n.jpg"
                },{
                    text : 'A good start is half the work 🍌🍎 #newday #takeyourvitamins #anappleadaykeepsthedoctoraway',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e35/20180533_952165241591663_4721747351411097600_n.jpg"
                },{
                    text : 'Our @mattvanvoorst is nominated for a DIA Pro Best Talent! #congrats #dontstealhim',
                    src : "https://instagram.faep8-1.fna.fbcdn.net/t51.2885-15/e35/18512850_1855904474670371_8218297136370941952_n.jpg"
                }
            ]
        }
    }
   render() {
        let instaArray = this.state.images;
        let instaRender = [];
        for(let value of instaArray){
            instaRender.push(<InstaBlock text={value.text} src={value.src} />);
        }
        return (    
                  <div className="row"> 
                    <div className="col-sm-12">
                      <h2>Follow us on Instagram</h2>
                      <h3>@tamtamnl</h3>
                  </div>
                      {instaRender}
                  </div>
             )
   }
}

class InstaBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="col-sm-12 col-md-4">
                <div className="insta-block">
                    <img className="insta-block__img" src={this.props.src} alt="" />
                    <p className="insta-block__text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default InstaFeed;