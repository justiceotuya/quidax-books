import React from 'react';
import { Home } from './pages';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;
