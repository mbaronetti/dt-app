import React from 'react';
import './../../index.css';
import './form.css';
import Icons from './../../icons2x.png';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            firstNameValidClass : 'd-none',
            firstNameIconClass : 'd-none',
            lastName : '',
            lastNameValidClass : 'd-none',
            lastNameIconClass : 'd-none',
            email : '',
            emailValidClass : 'd-none',
            emailIconClass : 'd-none',
            phone : '',
            phoneValidClass : 'd-none',
            phoneIconClass : 'd-none',
            message : '',
            messageValidClass : 'd-none',
            messageIconClass : 'd-none',
            valid : 'true',
            messageContainerClass : 'd-none',
            messageContainerText : 'Please fill the form',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        var validFlag = 'true';
        var validEmail = re.test(this.state.email.toLowerCase());
        if(this.state.email.length < 1 || !validEmail){ 
            validFlag = 'false';
            this.setState({emailValidClass : 'validation-component d-block', emailIconClass : 'input__icon'})
        }else{ 
            this.setState({emailValidClass : 'd-none' , emailIconClass : 'input__icon d-block'});
        }
        if(this.state.firstName.length < 1){
            validFlag = 'false';
            this.setState({firstNameValidClass : 'validation-component d-block' , firstNameIconClass : 'input__icon'})
        }else{
            this.setState({firstNameValidClass : 'd-none', firstNameIconClass : 'input__icon d-block'});
        }
        if(this.state.lastName.length < 1){
            validFlag = 'false';
            this.setState({lastNameValidClass : 'validation-component d-block' , lastNameIconClass : 'input__icon'})
        }else{
            this.setState({lastNameValidClass : 'd-none', lastNameIconClass : 'input__icon d-block'});
        }
        if(isNaN(this.state.phone)){
            validFlag = 'false';
            this.setState({phoneValidClass : 'validation-component d-block' , phoneIconClass : 'input__icon'})
        }else{
            this.setState({phoneValidClass : 'd-none'});
            (this.state.phone.length > 0) ? this.setState({phoneIconClass : 'input__icon d-block'}) : this.setState({phoneIconClass : 'd-none'});
        }
        if(this.state.message.length < 1){
            validFlag = 'false';
            this.setState({messageValidClass : 'validation-component d-block', messageIconClass : 'input__icon'})
        }else{
            this.setState({messageValidClass : 'd-none', messageIconClass : 'input__icon d-block'});
        }
        this.setState({valid: validFlag}, function(){
            validFlag = 'true';
            if(this.state.valid == 'false') {
                this.setState({
                    messageContainerClass : 'message-container d-block'
                });
            }else{
                this.setState({
                    messageContainerClass : 'd-none'
                });
            }
        });
        if(validFlag == 'false'){
            e.preventDefault();
        }else{
            setTimeout(function(){
                window.location.href="/components/ThankYou";
            }, 500);
            e.preventDefault();
        }
    }
    handleOnChange(e){
        let inputVal = e.target.value;
        console.log('inputVal: ' + inputVal);
        console.log('inputVal: ' + e.target.name);
        switch(e.target.getAttribute('name')){
            case 'firstName':
                this.setState({firstName : inputVal})
                console.log('Firstname state: ' + this.state.firstName);
                break;
            case 'lastName':
                this.setState({lastName : inputVal})
                break;
            case 'email':
                this.setState({email : inputVal})
                break;
            case 'phone':
                this.setState({phone : inputVal})
                break;
            case 'message':
                this.setState({message : inputVal})
                break;
            default:
                break;
        }
    }
   render() {
      return (
          <section className="form-section">
          <h2>we would love to <br/> hear from you</h2>
          <div className="container form-container">
              <div className={this.state.messageContainerClass}>
                <div className="message__icon"></div>
                <p>{this.state.messageContainerText}</p>
              </div>
              <form onSubmit={this.onSubmit} className="input-container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                          <InputComponent iconClassName={this.state.firstNameIconClass} valid={this.state.valid} validationMessage="Enter first name" className={this.state.firstNameValidClass} name="firstName" onChange={this.handleOnChange} type="text" placeholder="First Name" />
                    </div> 
                    <div className="col-sm-12 col-md-6">               
                        <InputComponent iconClassName={this.state.lastNameIconClass} valid={this.state.valid} validationMessage="Enter last name" className={this.state.lastNameValidClass} name="lastName" onChange={this.handleOnChange} type="text" placeholder="Last Name" />
                    </div> 
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <InputComponent iconClassName={this.state.emailIconClass} valid={this.state.valid} validationMessage="Enter valid email address" className={this.state.emailValidClass} name="email" onChange={this.handleOnChange} type="text" placeholder="Email" />
                    </div> 
                    <div className="col-sm-12 col-md-6">
                        <InputComponent iconClassName={this.state.phoneIconClass} valid={this.state.valid} validationMessage="Enter valid phone number" className={this.state.phoneValidClass} name="phone" onChange={this.handleOnChange} type="text" placeholder="Phone (optional)" />
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-sm-12">
                  <TextAreaComponent iconClassName={this.state.messageIconClass} valid={this.state.valid} validationMessage="Message cannot be empty" value={this.state.message} className={this.state.messageValidClass} name="message" onChange={this.handleOnChange} type="text" placeholder="Message"/>
                    </div> 
                </div> 
                  <input type="submit" value="Submit" className="button--red" />
              </form>
          </div>
          </section>
      )
   }
}

class InputComponent extends React.Component{
       render(){
           return (
               <div>
                    <input valid={this.props.valid} onChange={this.props.onChange} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
                    <div className={this.props.iconClassName}></div>
                    <Validation className={this.props.className} text={this.props.validationMessage} />
                </div>
               )
       }
}

class TextAreaComponent extends React.Component{
    render(){
        return (
            <div>
                <textarea valid={this.props.valid} onChange={this.props.onChange} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} >{this.props.value}</textarea>
                    <div className={this.props.iconClassName}></div>
                <Validation className={this.props.className} text={this.props.validationMessage} />
            </div>
        )
    }
} 
 
class Validation extends React.Component{
    render(){
        return (
            <div className="p-relative">
            <div className={this.props.className}>{this.props.text}</div>
            <div className="arrow-up"></div>
            </div>
        ) 
    }
}

export default Form; 