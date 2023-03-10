const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: string
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    input SavedBooks {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: string
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!): User
    }
`;

module.exports = typeDefs