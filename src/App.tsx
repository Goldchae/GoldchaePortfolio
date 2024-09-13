import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home: React.FC = () => <h1>Hello from Home Page</h1>;

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
