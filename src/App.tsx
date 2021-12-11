import React from 'react';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Home, BookDetails, BookSearch } from './pages';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/:id" element={<BookDetails />} />
                <Route path="/books/search" element={<BookSearch />} />
            </Routes>
        </Layout>
    );
}

export default App;
