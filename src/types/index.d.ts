export type Book = {
    id: string;
    title: string;
    publisher: string;
    genres: {
        name: string;
        id: string;
    }[];
    image_url: string;
    price: number;
    currency: string;
    authors: {
        name: string;
        id: string;
    }[];
    available_copies: number;
    featured: string;
    likes: number;
    rating: number;
    release_date: string;
    number_of_purchases: number;
    full_description: string;
    tags: {
        id: string;
        name: string;
    }[];
};
