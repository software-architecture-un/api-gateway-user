import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allActivities: (_) =>
			getRequest(URL, ''),
		activityById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createActivity: (_, { activity }) =>
			generalRequest(`${URL}`, 'POST', activity),
		updateActivity: (_, { id, activity }) =>
			generalRequest(`${URL}/${id}`, 'PUT', activity),
		deleteActivity: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
