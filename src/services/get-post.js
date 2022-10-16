import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getPost = async (slug) => {
  const query = gql`
    query Assets {
      postsConnection(where: { slug: "${slug}" }) {
        edges {
          node {
            content {
              text
              html
              markdown
              raw
              json
            }
            featuredImage {
              url
            }
            id
            slug
            title
            createdAt
            author {
              slug
              name
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges[0].node;
  } catch (err) {
    throw err;
  }
};
