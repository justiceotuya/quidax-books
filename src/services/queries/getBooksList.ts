import { gql } from '@apollo/client';

export const getBooksList = gql`
    query getBooksList {
        books {
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
