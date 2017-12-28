import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SlideShow from './components/Carousel/Carousel';
import AboutUs from './components/AboutUs/AboutUs';
import InstaFeed from './components/InstaFeed/InstaFeed';
import Form from './components/Form/Form';
import ThankYou from './components/Form/ThankYou';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render() {
    return(
         <Router>
            <div id="app-container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/components/Form" component={Form} />
                <Route exact path="/components/ThankYou" component={ThankYou} />
            </Switch>
            <Footer />
            </div>
        </Router>
      );
   }
}

class Home extends React.Component{
    render(){
        return(
            <div>
                <section  className="home">
                    <SlideShow />
                </section>
                <div className="container">
                    <AboutUs  />
                </div>
                <section className="instaFeed">
                    <div className="container">
                        <InstaFeed />
                    </div>
                </section>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
