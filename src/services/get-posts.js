import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection(first: 100) {
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
            featuredImageOne {
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
