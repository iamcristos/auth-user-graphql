import React from 'react';
import ReactDOM from 'react-dom';
import ApoloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/app';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashborad from './components/Dashboard';
import AuthHOC from './components/AuthHOC';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})
const client = new ApoloClient({
  networkInterface,
  dataIdFromObject: o=> o.id
})
const Root = () => {
  return (
    <ApolloProvider client={client} >
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={AuthHOC(Dashborad)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
