import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getContact = async () => {
  const query = gql`
    query Assets {
      contactsConnection {
        edges {
          node {
            content
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.contactsConnection.edges[0].node;
};
