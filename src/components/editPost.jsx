import React, { Component } from 'react';

class EditPost extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <input type="text" placeholder="Type your new post content here" className="form-control mr-2 col-md-9 float-left" value={this.props.editPost} onChange={this.props.onUpdateHandle}/>
                <button className="btn btn-primary mr-2 btn-md col-md-2 float-left" onClick={()=>this.props.onUpdate(this.props.post)}>Update</button>
            </React.Fragment>
         );
    }
}
 
export default EditPost;