import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getWelcomeScreen = async () => {
  const query = gql`
    query Assets {
      welcomeScreensConnection {
        edges {
          node {
            title
            featuredImage {
              url
            }
            text
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.welcomeScreensConnection.edges[0].node;
};
