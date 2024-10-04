import axios from 'axios';
import store from '../Redux/Store/Store';

const axiosInstance = axios.create({
  baseURL:
  'https://custom-dev.onlinetestingserver.com/world-kicken-backend/api/',
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('user/login', {
      email,
      password,
    });
    return response.data.data.token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

const state = store.getState();
const accessToken = state.auth.accessToken;

export const getStore = async (shopNumber: number) => {
  try {
    const response = await axiosInstance.get(`user/store/${shopNumber}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Store:', error);
    throw error;
  }
};
