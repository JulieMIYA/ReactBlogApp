import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{
    componentDidMount() {
        if(!this.props.post){
            const { match :{ params }} = this.props;
            this.props.fetchPost(params.id); 
        }
    }
    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
             this.props.history.push('/');
        });
        
    }
    render(){
        const { post } = this.props; 
        if(post)
            return (
                <div> 
                    <Link to="/" className="btn btn-primary">Back to index</Link>    
                    <h3>{ post.title }</h3>
                    <h6>Categories: { post.categories} </h6>
                    <p>{ post.content }</p>
                    <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this) }>Delete this post</button>
                </div>
            );
        else 
            return <div>Loading...</div>;
        
    }
}
const matchStateToProps= (state, ownProps)=>{
    return { post : state.posts[ownProps.match.params.id] }
}
export default connect(matchStateToProps, { fetchPost, deletePost})(PostsShow);

