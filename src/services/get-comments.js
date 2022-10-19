import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getComments = async (slug) => {
  const query = gql`
    query Assets {
      commentsConnection(where: {post: {slug: "${slug}"}}) {
        edges {
          node {
            comment
            createdAt
            email
            name
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.commentsConnection.edges;
};
