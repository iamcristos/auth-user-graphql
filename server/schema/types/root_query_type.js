const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserTypes = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserTypes,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
