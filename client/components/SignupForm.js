import React, {Component} from 'react';
import AuthForm from './AuthForm';
import {graphql} from 'react-apollo';
import mutation from '../mutations/signup';
import query from '../quaries/currentUser';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {errors: []}
    }

    onSubmitHandler({email, password}) {
        this.props.mutate({
            variables: {email, password},
            refetchQueries: [{query}]
        }).catch(res => {
            const errors = res.graphQLErrors.map(err=> err.message);
            this.setState({errors})
        })
    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmitHandler={this.onSubmitHandler.bind(this)}/>
            </div>
        )
    }
};

export default graphql(query)(
    graphql(mutation)(SignUp)
);