import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {

    const { loading, data } = useQuery(GET_USER);
    const [removeBook, {error}] = useMutation(REMOVE_BOOK);

    const userData = data?.me || [];

    const handleDeleteBook = async (bookId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const {data} = await removeBook({
                variables: { bookId }
            });

            removeBookId(bookId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
        <Jumbotron fluid className='text-light bg-dark'>
            <Container>
                </Container>
                </Jumbotron>
                <Container>
                    <h2>
                        {userData.savedBooks.length
                        ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length ===1 ? 'book' : 'books'}:`
                    : 'No saved books'}
                    </h2>
                    <CardColumns>
                        {userData.savedBooks.map((book) => {
                            return (
                                <Card key={book.bookId} border='dark'>
                                {book.image ? <Card.Img src={book.img} alt={`The cover for ${book.title}`} variant='top'/> : null}
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <p className='small'>Authors: {book.authors}</p>
                                    <Card.Text>{book.description}</Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                                        Delete Book
                                    </Button>
                                </Card.Body>
                                </Card>
                            );
                        })}
                    </CardColumns>
                </Container>
            </>
    );
};

export default SavedBooks;