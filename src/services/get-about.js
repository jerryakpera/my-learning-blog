import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getAbout = async () => {
  const query = gql`
    query Assets {
      aboutsConnection {
        edges {
          node {
            featuredImage {
              url
            }
            paragraphTwo {
              html
            }
            paragraphOne {
              html
            }
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.aboutsConnection.edges[0].node;
};
