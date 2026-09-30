import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Pizza() {
    const [pizza, setPizza] = useState('');
    
    function logs(){
        console.log(pizza);
    }
    
    useEffect(()=>{
        async function getPizza(){
            const resp = await fetch('http://localhost:5000/api/pizzas/p001');
            const data = await resp.json();
            setPizza(data);
        }
        getPizza();
    },[])

    if(!pizza){
        return (
            <p>Cargando datos...</p>
        )
    }
  return (
    <section className='section'>
      <Card className='pizzaCard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          {pizza?.ingredients.map((ingre, idx)=>{
            return(
                <span key={idx}>{ingre} </span>
            )
          })}
        </Card.Text>
        <Card.Text>
          {pizza.desc}
        </Card.Text>
        <Card.Text>$ {pizza.price}</Card.Text>
        <Button variant="secondary" onClick={logs}>Add to cart</Button>
      </Card.Body>
    </Card>
    </section>
  );
}
