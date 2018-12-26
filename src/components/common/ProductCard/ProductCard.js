import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Rating } from 'semantic-ui-react';

const ProductCard = (props) => {
  return(
  <Card>
      <a href={`product-details/${props.name}`}>
        <Image src={props.src} alt={props.name}/>
      </a>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.description}</Card.Meta>
      </Card.Content>
  </Card>
)};

export default ProductCard;