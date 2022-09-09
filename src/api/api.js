import axios from "./axios";
import decode from "jwt-decode";

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/Auth/login", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const forgotPassword = async (password) => {
  try {
    const response = await axios.post(
      "/Auth/forgot-password",
      JSON.stringify(password),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const imageUpload = async (id, formData) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.patch(`/User/${id}/upload-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const updatedUserImage = response.data.data;
    localStorage.setItem("userImage", updatedUserImage);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getRefreshToken = async (token) => {
  const user = JSON.parse(token);
  const userId = user.id;
  const refreshToken = user.refreshToken;
  console.log("Token Expired");
  try {
    const response = await axios.post(
      "/Auth/refresh-token",
      JSON.stringify({ userId, refreshToken }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getUser = async () => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  const userId = user.id;
  try {
    const response = await axios.get(
      `/User/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(response);
    // return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

