import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	activitiesMutations,
	activitiesQueries,
	activitiesTypeDef
} from './activities/typeDefs';

import activitiesResolvers from './activities/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		activitiesTypeDef
	],
	[
		activitiesQueries
	],
	[
		activitiesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		activitiesResolvers
	)
});
