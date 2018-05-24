import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component{
    componentDidMount() {
        if(!this.props.post){
            const { match :{ params }} = this.props;
            this.props.fetchPost(params.id); 
        }
        
    }
    render(){
        const { post } = this.props; 
        if(post)
            return (
                <div>   
                    <h3>{ post.title }</h3>
                    <h6>Categories: { post.categories} </h6>
                    <p>{ post.content }</p>
                </div>
            );
        else 
            return <div>Loading...</div>;
        
    }
}
const matchStateToProps= (state, ownProps)=>{
    return { post : state.posts[ownProps.match.params.id] }
}
export default connect(matchStateToProps, { fetchPost })(PostsShow);

