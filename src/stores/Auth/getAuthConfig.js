import useAuthStore from './authStore';

const getAuthConfig = () => ({
  headers: { Authorization: `Bearer ${useAuthStore.getState().token}` },
});

export default getAuthConfig;
