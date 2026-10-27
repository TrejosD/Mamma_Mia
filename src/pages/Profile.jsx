import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../contexts/UserContext';

export default function Profile() {
  const {handleAuthenticationStatus, email, handleLogout} = useContext(UserContext);
  
  return (
    <>
    <section className='section'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png" />
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="white" onClick={handleAuthenticationStatus}>Check Status</Button>
        <Button variant="dark" onClick={handleLogout}>Log Out</Button>
      </Card.Body>
    </Card>
    </section>
    </>
  )
}
