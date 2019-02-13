import React, { Component } from 'react';
import EditPost from './editPost';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-7 mb-3">
            <div className="card">
                <div className="card-header">
                    Post Id# {this.props.post.id}
                    <button className="btn btn-danger btn-sm float-right" onClick={()=>this.props.onDelete(this.props.post)}>X</button>
                    <button className="btn btn-warning btn-sm float-right mr-2" onClick={()=>this.props.onEdit(this.props.post)}>Edit</button>
                </div>
                <div className="card-body">
                    {this.props.post.edit ? <EditPost post={this.props.post} onUpdateHandle={this.props.onUpdateHandle} editPost={this.props.editPost} onUpdate={this.props.onUpdate} value={this.props.post.value}></EditPost> : <p className="card-text">{this.props.post.value}</p>}
                </div>
            </div>
            </div>
         );
    }
}
 
export default Post;