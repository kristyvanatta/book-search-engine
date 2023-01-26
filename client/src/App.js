import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-center align-center min-100-vh bg-primary">
                <Routes>
                    <Route  path='/' 
                    elements={<Home/>} 
                    />
                    <Route  path='/saved' 
                    elements={<SavedBooks/>} 
                    />
                    <Route  path='/search' 
                    elements={<SearchBooks/>} 
                    />
                    <Route path="*"
                    elements={<NotFound/>} />
                    </Routes>
                    </div>
            </Router>
        </ApolloProvider>

    );
}

export default App;