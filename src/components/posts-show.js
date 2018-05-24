import React, { Component } from 'react';

class PostsShow extends Component{
    componentDidMount() {
        const { match :{ param }} = this.props;
    }
    render(){
        return (
            <div>post show </div>
        );
    }
}
export default PostsShow;

