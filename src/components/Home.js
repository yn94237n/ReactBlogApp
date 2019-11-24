import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,3)
            })
        })
    }
    render () {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : ( 
            <div className="center">No Posts Yet</div> 
        )
        return (
            <div className="">
                <div className="section no-pad-bot">
                    <h1 className="header center orange-text">React Blog App </h1>
                    <div className="row center">
                        <h6 className="header col s12 light">A modern responsive front-end framework based on 
                            Material Design
                        </h6>
                    </div>
                </div>
                <div>
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home