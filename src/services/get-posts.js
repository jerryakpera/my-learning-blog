import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            categories {
              createdAt
              name
              slug
            }
            author {
              slug
              twitter
              name
              instagram
              facebook
              bio
              photo {
                url
              }
            }
            createdAt
            excerpt
            featuredImage {
              url
            }
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
