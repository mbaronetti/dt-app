import React from 'react';
import './footer.css';
class Footer extends React.Component {
   render() {
      return (
        <footer>
            <nav>
                <FooterLink link="#" className="footer-link footer-link--facebook" />
                <FooterLink link="#" className="footer-link footer-link--twitter" />
                <FooterLink link="#" className="footer-link footer-link--instagram" />
            </nav>
        </footer>
      );
   }
}

class FooterLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : null,
        }
    }
    render(){
        return <a href={this.props.link} className={this.props.className} ></a>
    }
}

export default Footer;