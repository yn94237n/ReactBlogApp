import React, { Component } from 'react';
import Navbar from './components/Navbar';
import RightNav from './components/RightNav';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home2 from './components/Home2';
import About from './components/About';
import Post from './components/Posts';
import TwitterContainer from './components/TwitterContainer';
import MyTwitterContainer from './components/MyTwitterContainer';
import PublicityArea from './components/PublicityArea';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      
      <div className="">
        {/* Navbar goes here */}
        <div>
          <Navbar />
        </div>
               
        {/* Page Layout here */}
        <div className="row siteContent">

          <div className="col s12 m8 l9">
            <Switch>
              <Route exact path='/' component={Home2} />
              <Route path='/about' component={About} />
              <Route path='/:post_id' component={Post} />
            </Switch>
          </div>

          <div className="col s12 m4 l3 grey lighten-2">
            <div className="RightNavHome">
                <RightNav />
            </div>
            <div className="twitterBox">
              <MyTwitterContainer />
            </div>
            <div className="publicSpot">
                <PublicityArea />
            </div>
          </div>

        </div>

        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
