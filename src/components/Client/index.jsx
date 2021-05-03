import React from 'react';
import faker from 'faker';

const Client = ({data}) => {
	let { firstName, lastName, email, phone, picture, job } = data;

	// id: faker.random.uuid(),
	// 		firstName: firstName,
	// 		lastName: lastName,
	// 		phone: faker.phone.phoneNumber('## ## ## ## ##'),
	// 		email: faker.internet.email(firstName, lastName).toLowerCase(),
	// 		picture: faker.internet.avatar(),
	// 		job: faker.name.jobTitle()

	return (
		<li>
			{firstName} {lastName} {job}
			<img src={picture} alt={`avatar of ${firstName} ${lastName}`} />
			<a href={`mailto:${email}`}>{email}</a>
			<a href={`callto:${phone}`}>{phone}</a>
		</li>
	);
}
export default Client;