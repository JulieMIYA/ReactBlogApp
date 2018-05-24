import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions' 
import _ from 'lodash';
import { Link }from 'react-router-dom';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
          <li className="list-group-item" >
            <Link to={`/posts/${post.id}`} key={post.id}  >
              {post.title}
            </Link>
          </li>
        
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <Link className="btn btn-primary" to="/posts/new" >
          New post
        </Link>
        <h3>Posts index</h3>
        <ul className="list-group">
          {this.renderPosts()} 
        </ul>
      </div>
    );
  }
}
/*const mapDispatchToProps= (d)=>{
  // return {fetchPosts : (params)=>d(fetchPosts(params))}
  return bindActionCreators({ fetchPosts } ,d);
}*/
// connect accept the second param as object ( each functions insides assumed to be action creators ) and 
// function like mapDispatchToProps
export default connect((state)=>{return { posts: state.posts }}, { fetchPosts })(PostsIndex);