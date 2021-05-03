import React from 'react';
import faker from 'faker';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Client = ({data}) => {
	let { firstName, lastName, email, phone, picture, job } = data;

	return (
		<Card>
		  <Card.Img variant="top" src={picture} />
		  <Card.Body>
		    <Card.Title>{firstName} {lastName}</Card.Title>
		    <Card.Text>
		      {job}
		    </Card.Text>
		    <Button variant="primary" href={`mailto:${email}`}>Email</Button>
		    <Button variant="primary" href={`callto:${phone}`}>Phone</Button>
		  </Card.Body>
		</Card>
	);
}
export default Client;