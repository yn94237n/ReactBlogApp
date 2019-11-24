import React, { Component } from 'react';

class MyTwitterContainer extends Component{

    twitterWidget () {

        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);

        const anchor = document.createElement("a");
        anchor.setAttribute("class", "twitter-timeline");
        anchor.setAttribute("data-width", "350");
        anchor.setAttribute("data-height", "350");
        anchor.setAttribute("data-tweet-limit", "5");
        anchor.setAttribute("data-chrome", "");
        anchor.setAttribute("href", "https://twitter.com/espn");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.twitterWidget(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
    
    render () {
        return(
            <section className="twitterContainer">
                 <div className="twitter-embed"></div>
            </section>
        )
    }

}

export default MyTwitterContainer