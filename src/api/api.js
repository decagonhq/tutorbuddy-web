import axios from "./axios";
import Axios from "axios";
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
  console.log("Token Expired", userId, refreshToken);
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

export const getUser = async (userId) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.get(`/User/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getTutor = async (userId) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.get(`/Tutor/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getFeaturedTutors = async () => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.get("/Tutor/get-feature-tutors", {
      headers: {
        Authorization: `Bearer ${user.token}`,
        accept: "*/*",
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getAllSubjects = async (size = 10, num = 1) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.get(
      `/Tutor/get-all-subject-with-categories?pageSize=${size}&pageNumber=${num}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          accept: "*/*",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getAllRecommendedSubjects = async (size = 10, num = 1) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await axios.get(
      `/Tutor/get-all-recommend-subject?pageSize=${size}&pageNumber=${num}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          accept: "*/*",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getSubjectByID = async (id) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  try {
    const response = await Axios.get(
      `https://api.tutorbuddy.net/api/Subject/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          accept: "*/*",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
