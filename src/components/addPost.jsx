import React, { Component } from 'react';
import './addPost.css';
import Post from './post';

class AddPost extends Component {
    state = { 
        posts: [
            {id: 1, value: 'My first post.', edit: false},
            {id: 2, value: 'Second post.', edit: false},
            {id: 3, value: 'I am feeling awesome today.', edit: false}
        ],
        newPost: "",
        editPost: "",
        error: ""
     }

    handleValChange = (event) => {
        this.setState({editPost: event.target.value});
    }

    updatePostVal = (event) =>
    {
        this.setState({newPost: event.target.value});
    }

    addPost = () => {
        if(this.state.newPost.trim().length>0){
            this.setState({error: ""});
            let id = this.state.posts.length>0 ? Math.max.apply(Math, this.state.posts.map(function(o) { return o.id; })) : 0;
            let post = {id: id+1, value: this.state.newPost};
            let posts = [...this.state.posts];
            posts.splice(0,0,post);
            this.setState({posts: posts, newPost: ""});
        }
        else{
            this.setState({error: "Please enter some characters to post."});
        }
    }

    deletePost = post =>{
        let index = this.state.posts.indexOf(post);
        let posts = [...this.state.posts];
        posts.splice(index,1);
        this.setState({posts});
    }

    editPost = post =>{
        let posts = [...this.state.posts];
        let index = posts.indexOf(post);
        posts[index].edit = true;
        this.setState({posts, editPost: post.value});
    }

    updatePost = post => {
        let posts = [...this.state.posts];
        const postToEdit = posts.find(p=>p.id === post.id);
        const index = posts.indexOf(postToEdit);
        posts[index].value = this.state.editPost;
        posts[index].edit = false;
        this.setState({posts});
    }

    render() { 
        let errorClasses = {
            color: "red",
            display: this.state.error.length>0?"block":"none",
            paddingLeft: "25px",
            paddingTop: "5px",
        }
        return ( 
            <React.Fragment>
            <div className="row" style={{marginTop: 75+"px", paddingLeft: 25+"px"}}>
                <input type="text" placeholder="Type your new post content here" className="form-control mr-2 col-md-6 float-left" value={this.state.newPost} onChange={this.updatePostVal}/>
                <button className="btn btn-success mr-2 btn-md col-md-1 float-left" onClick={this.addPost}>Add</button>
            </div>
            <h6 className="row mt-0" style={errorClasses}>
                {this.state.error}
            </h6>
            <hr className="row col-md-7 bg-dark ml-3" />
            <div className="ml-2 row">
                {this.state.posts.map(post=>(
                    <Post 
                        key={post.id}
                        onDelete={this.deletePost}
                        onEdit={this.editPost}
                        onUpdate={this.updatePost}
                        onUpdateHandle={this.handleValChange}
                        editPost={this.state.editPost}
                        post={post}>
                    </Post>
                ))}
            </div>
            </React.Fragment>
         );
    }
}
 
export default AddPost;