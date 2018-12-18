import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Rating } from 'semantic-ui-react';

const ProductCard = (props) => (
  <Card>
    <Image src={props.src} alt="제품 이미지"/>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.category}</Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='heart' defaultRating={props.rating} maxRating={5} disabled/>
    </Card.Content>
  </Card>
);

export default ProductCard;