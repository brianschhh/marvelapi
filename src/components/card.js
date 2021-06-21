import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./card.css";

const CardUser = ({ personajes }) => (
  <div className='CardU'>
    <Card >
      <Image
        src={`${personajes.thumbnail.path}.${personajes.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{personajes.name}</Card.Header>
      </Card.Content>
    </Card>
  </div>
);

export default CardUser;
