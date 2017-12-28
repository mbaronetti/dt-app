import React from 'react';
import './../../index.css';

class ThankYou extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageContainerClass : 'message-container--success d-block',
            messageContainerText : 'Thank you, we have received your message.'
        }
    }
   render() {
      return (
          <section className="form-section">
              <div className="container form-container">
                  <div className={this.state.messageContainerClass}>
                    <div className="message__icon--success"></div>
                    <p>{this.state.messageContainerText}</p>
                  </div>
              </div>
          </section>
      )
   }
}


export default ThankYou; 