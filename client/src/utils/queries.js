import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        user {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;

