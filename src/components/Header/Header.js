import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import Icons from './../../icons2x.png';
class Header extends React.Component {
   render() {
      return (
        <header ref="myNav" className="header">
            <HeaderLogo />
            <NavBar />
        </header>
      );
   }
}

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: 'false',
            className : 'header__nav header__nav--hidden'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(this.state.visible == 'false'){
            this.setState({
                visible : 'true',
                className : 'header__nav'
            })
        }else{
            this.setState({
                visible : 'false',
                className : 'header__nav header__nav--hidden'
            })
        }
        console.log('toggle');
        e.preventDefault();
    }
    render(){
        return(
            <nav className={this.state.className}>
                <BurgerButton onClick={this.handleClick} />
                <NavLink link="/" text="Home" />
                <NavLink link="#" text="People" />
                <NavLink link="/components/Form" text="Contact" />
            </nav>
        )
    }
}

class BurgerButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className : 'burger__button'
        }
    }
    render(){
        return <a onClick={this.props.onClick} className={this.state.className} href="#"></a>
    }
}

    
class NavLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className : '',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
       this.setState({className: '--active'});
       window.location.href = this.props.link; 
       e.preventDefault();
    }
    render(){
        return <a href={this.props.link} className={this.state.className} onClick={this.handleClick} >{this.props.text}</a> 
    }
}    

class HeaderLogo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'null'
        }
    }
    render(){
        return <div className="header__logo"></div>
    }
}


export default Header; 