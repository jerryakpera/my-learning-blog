import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getAuthor = async (slug) => {
  const query = gql`
    query Assets {
      authorsConnection(where: { slug: "${slug}" }) {
        edges {
          node {
            bio
            createdAt
            email
            facebook
            instagram
            name
            photo {
              url
            }
            slug
            twitter
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.authorsConnection.edges[0].node;
  } catch (err) {
    throw err;
  }
};
