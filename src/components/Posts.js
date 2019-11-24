import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    
    state = {
        post: null,
        postid_toshow: null
    }
    componentDidMount() {
      
        let id = this.props.match.params.post_id;

        axios.get('./blog_posts.json')
            .then(res => {
                console.log(res)
                this.setState({
                    post: res.data
                })

        })
        
    }

    render() {
        let id_temp = this.props.match.params.post_id - 1;
        const post = this.state.post ? (
            <div className="post">
                <h4>{this.state.post[id_temp].title}</h4>
                <div className="postInfo">
                    <span className="ByClass">By</span><span className="Author"> Yerson E. Nieto</span>
                    <br></br>
                    <span className="postDate">November 24, 2019, 12:30 PM</span>
                </div>
                <div className="imagePost">
                    <img src={this.state.post[id_temp].postImg} alt="" />
                </div>
                <p className="flow-text">{this.state.post[id_temp].body}</p>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )
        
        return(
            <div className="container postContainer">
                { post }
            </div>
        )
    }
}

export default Post