import axios from "./axios";

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/Auth/login", JSON.stringify(data));
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
