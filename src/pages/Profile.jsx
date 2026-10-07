import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profile() {
  return (
    <>
    <section className='section'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png" />
      <Card.Body>
        <Card.Title>Juanito.Pereira@google.com</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Log Out</Button>
      </Card.Body>
    </Card>
    </section>
    </>
  )
}
