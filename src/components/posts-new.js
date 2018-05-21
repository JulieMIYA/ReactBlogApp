import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

function validate (values){
    //console.log(values) -> {title : 'as', categories: 'dshgnsj', content:'bdjskgnfk'}
    const errors = {};

    //Validate the inputs form 'values'
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = "Enter a category";
    }
    if(!values.content){
        errors.content = "Enter some content";
    }
    // if errors is empty, the form is fine to submit 
    // if errors has any properties, redux assume that the form is invalid .
    return errors; 
}

class PostsNew extends Component{
    renderField(field){
        return (
            <div>
                <label>{ field.label }</label>
                <input 
                    className = "form-control"
                    type="text" 
                    {...field.input} 
                />
            </div>
        )
    }
    render(){
        return (
            <form>
                <Field name= "title" label="Title" component= {this.renderField} />
                <Field name= "categories" label="Categories" component= {this.renderField} />
                <Field name= "content" label="Content" component= {this.renderField} />
            </form>
        );
    }
}

export default reduxForm({
    validate, 
    form : 'PostsNewForm'
})(PostsNew);