import { gql } from '@apollo/client';

export const getBookDetail = gql`
    query getBookDetail($id: ID!) {
        book(id: $id) {
            id
            title
            publisher
            genres {
                name
                id
            }
            image_url
            price
            currency
            rating
            authors {
                name
                id
            }
            available_copies
            featured
            likes
            rating
            release_date
            number_of_purchases
            full_description
            tags {
                id
                name
            }
        }
    }
`;
