import React from 'react';
import faker from 'faker';
import Client from '../Client';

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
		<ul>
			{clientsList.map((clientData) => (
				<Client data={clientData} key={clientData.id} />
			))}
		</ul>
	);
};

export default Clients;