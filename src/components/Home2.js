import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get('./blog_posts.json')

        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,3)
            })
        })
    }
    render () {
        const { posts } = this.state;
        
        var i = 1;
        let imgPath = "images/post_img" + i + ".jpg";
        
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <img src={post.postImg} alt="Not Found." />
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <span className="postDate">{post.postdate}</span>
                            <p>{post.preview}</p>
                        </div>
                    </div>
                )
            })
        ) : ( 
            <div className="center">No Posts Yet</div> 
        )
        return (
            <div className="container">
                <div className="section no-pad-bot">
                    <h2 className="header center indigo-text text-darken-4">Your official Yankee Fan Blog</h2>
                    <div className="row center">
                        <h6 className="header col s12 light">
                            The most updated posts about The New York Yankees, sports, and more.                      
                        </h6>
                    </div>
                </div>
                <div className="home">
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home