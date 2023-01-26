import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_USER } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_USER, {
        fetchPolicy: "no-cahche"
    });

    const bookList = data?.user || [];

    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">
                <h1>Welcome To The Book Search Engine</h1>
            </div>
            <div className="card-body m-5">
        <h2>Here is a list of books:</h2>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <ul className="square">
            {bookList.map((book) => {
                return (
                <li key={book._id}>
                    <Link to={{ pathname: `/book/${book._id}` }}>
                        </Link>
                </li>
                );
            })}
            </ul>
        )}
        </div>
            <div className="card-footer text-center m-3">
                <h2>Search for more books</h2>
                <Link to="/SearchBooks">
                    <button className="btn btn-lg btn-danger">Search</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;