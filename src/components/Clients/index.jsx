import React from 'react';
import faker from 'faker';
import Client from '../Client';
import CardColumns from 'react-bootstrap/CardColumns';

const Clients = () => {
	const clientsList = Array.from({length: 100}, () => {
		let firstName = faker.name.firstName();
		let lastName = faker.name.lastName();
		return {
			id: faker.random.uuid(),
			firstName: firstName,
			lastName: lastName,
			phone: faker.phone.phoneNumber('## ## ## ## ##'),
			email: faker.internet.email(firstName, lastName).toLowerCase(),
			picture: faker.internet.avatar(),
			job: faker.name.jobTitle()
		}
	})


  console.log(clientsList);


	return (
		<CardColumns>
			{clientsList.map((clientData) => (
				<Client data={clientData} key={clientData.id} />
			))}
		</CardColumns>
	);
};

export default Clients;