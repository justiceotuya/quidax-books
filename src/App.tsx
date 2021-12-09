import React from 'react';
import { Home } from './pages';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import BookDetails from './pages/book-details';

function App() {
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
