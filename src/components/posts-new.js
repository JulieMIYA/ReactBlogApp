import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

function validate (values){
    //console.log(values) -> {title : 'as', categories: 'dshgnsj', content:'bdjskgnfk'}
    const errors = {};

    //Validate the inputs form 'values'
    if(!values.title){
        errors.title = "Enter a title"; // !!! the property must corresponds to the label name  
    }
    if(!values.categories){
        errors.categories = "Enter a category";
    }
    if(!values.content){
        errors.content = "Enter some content";
    }
    // if errors is empty, the form is fine to submit 
    // if errors has any properties, redux assume that the form is invalid
    return errors; 
}

class PostsNew extends Component{
    renderField(field){
        // redux-form is only responsible for managing the state of form,
        // it is up to us to render the form (define jsx structure) and wire up the state to certain elements
        const { meta, label, input } = field ;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;
        return (
            <div className= {className}>
                <label>{ label }</label>
                <input 
                    className = "form-control"
                    type="text" 
                    {...input}
                />
                <div className="text-help">
                    {meta.touched? meta.error: ""}
                </div>
            </div>
        )
    }
    // onSubmit is a custom callback function passed to handleSubmit, it will execute if data is validated
    // it allow us to define whatever we want as soon as data is validated 
    onSubmit(values){ 
        // values are form fields values
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });        
    }
    render(){
        // this.props are the props that redux-form generates to give to your decorated form component : PostsNew
        const { handleSubmit } = this.props ; 
        return (
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this))} >
                <Field name= "title" label="Title" component= {this.renderField} />
                <Field name= "categories" label="Categories" component= {this.renderField} />
                <Field name= "content" label="Content" component= {this.renderField} />
                <button className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

export default reduxForm({
    validate, 
    form : 'PostsNewForm'
})(connect(null, {createPost} )(PostsNew));