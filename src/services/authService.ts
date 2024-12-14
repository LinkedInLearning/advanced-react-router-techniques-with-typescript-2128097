import httpClient from "./httpClient";

interface Credentials {
  email: string;
  password: string;
}

// Function to login user
export const loginUser = async (credentials: Credentials) => {
  try {
    const response = await httpClient.post("/login", credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

// Function to get user profile (mock implementation)
export const getUserProfile = async () => {
  try {
    const response = await httpClient.get("/users/2");
    const user = {
      id: response.data.data.id,
      name: `${response.data.data.first_name} ${response.data.data.last_name}`,
      email: response.data.data.email,
      avatar: response.data.data.avatar,
    };

    return user; // Return the mapped user object
  } catch (error: any) {
    throw new Error("Failed to fetch user profile");
  }
};
