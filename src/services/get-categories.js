import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query Assets {
      categoriesConnection {
        edges {
          node {
            name
            slug
            createdAt
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categoriesConnection.edges;
};
