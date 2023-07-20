import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getBooks = async () => {
  const query = gql`
    query Assets {
      booksConnection(first: 100) {
        edges {
          node {
            createdAt
            review
            name
            author
            link
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.booksConnection.edges;
};
