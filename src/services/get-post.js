import { request, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

export const getPost = async (slug) => {
  const query = gql`
    query Assets {
      postsConnection(where: { slug: "${slug}" }) {
        edges {
          node {
            contentOne {
              html
            }
            featuredImageOne {
              url
            }
            contentTwo {
              html
            }
            featuredImageTwo {
              url
            }
            contentThree {
              html
            }
            featuredImageThree {
              url
            }
            contentFour {
              html
            }
            featuredImageFour {
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
            comments {
              comment
              email
              name
              createdAt
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
