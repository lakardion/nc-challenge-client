import create from 'zustand';
import { authUri } from '../../utils/ApiUris';
import axiosInstance from '../../utils/axiosInstance';

//not right -->
const authBody = {
  username: process.env.REACT_APP_API_USER,
  password: process.env.REACT_APP_API_PASSWORD,
};

const useAuthStore = create((set) => ({
  token: '',
  fetchToken: async () => {
    const { data } = await axiosInstance.post(authUri, authBody);
    set({
      token: data.token,
    });
  },
}));

export default useAuthStore;
