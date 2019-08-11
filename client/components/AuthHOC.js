import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {graphql} from 'react-apollo';
import query from '../quaries/currentUser';

export default (WrappedComponent)=>{
    class AuthComp extends Component {
        componentWillUpdate(nextProps) {
            if(!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login')
            }
        }
        render() {
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    };
    
    return graphql(query)(AuthComp);

}