import React, { Component } from 'react';
import AuthForm from './AuthForm';
import {graphql} from 'react-apollo';
import login from '../mutations/login';
import query from '../quaries/currentUser';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {errors: []}
    }
    onSubmitHandler({email, password}) {
        this.props.mutate({
            variables: {email, password},
            refetchQueries: [{query}]
        }).catch(res=> {
            const errors = res.graphQLErrors.map(err=> err.message)
            this.setState({errors})
        })
    }
    render() {
        return (
            <div>
                <h3>Login Form</h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmitHandler={this.onSubmitHandler.bind(this)}
                />
            </div>
        )
    }
}

export default graphql(login)(LoginForm);