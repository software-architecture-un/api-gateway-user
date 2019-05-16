export const activitiesTypeDef = `
type Activity {
    id: Int!
    name: String!
    description: String!
    qualification: Int!
    visits: Int!
    dead: String!

}
input ActivityInput {
  name: String!
  description: String!
  qualification: Int!
  visits: Int!
  dead: String!
}`;

export const activitiesQueries = `
    allActivities: [Activity]!
    activityById(id: Int!): Activity!
`;

export const activitiesMutations = `
    createActivity(activity: ActivityInput!): Activity!
    deleteActivity(id: Int!): Int
    updateActivity(id: Int!, activity: ActivityInput!): Activity!
`;
