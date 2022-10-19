import axios from "axios";

export const submitComment = async (commentObj) => {
  try {
    const response = await axios.post(
      "http://localhost:3021/comments",
      commentObj
    );

    console.log({ response });
    return response;
  } catch (err) {
    throw err;
  }
};
