import axios from "axios";

const commentsAPI = process.env.DEV
  ? process.env.COMMENTS_DEV_API
  : process.env.COMMENTS_PROD_API;

export const submitComment = async (commentObj) => {
  try {
    const response = await axios.post(commentsAPI, commentObj);

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
