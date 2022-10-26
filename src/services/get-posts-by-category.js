import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getPostsByCategory = async (slug) => {
  const query = gql`
    query Assets {
      postsConnection(where: {categories_some: {slug: "${slug}"}}) {
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
