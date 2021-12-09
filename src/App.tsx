import React, { useEffect } from 'react';
import { Home } from './pages';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import BookDetails from './pages/book-details';
import { useBookListContext } from './redux/slice';
import { useQuery } from '@apollo/client';
import { getBooksList } from './services/queries/getBooksList';
import { saveBookList } from './redux';

function App() {
    const { dispatch } = useBookListContext();
    const { loading, error, data } = useQuery(getBooksList);

    //add data to redux store
    useEffect(() => {
        if (data) {
            dispatch(saveBookList(data.books));
        }
    }, [data]);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;
