import React from 'react'
{/*importation du composant boostrap */}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
{/* function Carte */}
const Carte = (props) => {
  const link=props.link
  const destination=props.destination
  const desc=props.desc
  return (
    <div>
      <Card style={{ width: '18rem' }}>
     {/* insertion de notre image a l'aide du Card.Img  */}
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{destination}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Carte
