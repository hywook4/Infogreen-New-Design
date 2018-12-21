import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Rating } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const ProductCard = (props) => {
  return(
  <Card>
      <a href="product-details/12">
        <Image src={props.src} alt={props.name}/>
      </a>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.category}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon='heart' defaultRating={props.rating} maxRating={5} disabled/>
      </Card.Content>
  </Card>
)};

export default ProductCard;