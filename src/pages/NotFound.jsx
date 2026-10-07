import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function NotFound() {
  return (
    <section className="section">
  
    <h1>La ruta que intentas acceder No existe.</h1>
    <Button variant='dark'>
    <Link to='/' className="menu-item">Home</Link>
    </Button>
      
    </section>
  )
}
