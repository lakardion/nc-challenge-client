import create from 'zustand';
import { membersUri } from '../utils/ApiUris';
import axiosInstance from '../utils/axiosInstance';
import getAuthConfig from './Auth/getAuthConfig';

const usePeopleStore = create((set, get) => {
  return {
    peopleInactivityTracker: null,
    setPeopleInactivityTracker : (value)=>set({peopleInactivityTracker:value}),
    people: [],
    error: false,
    getPeople: async () => {
      try {
        const { data } = await axiosInstance.get(membersUri, getAuthConfig());
        set({
          people: data,
        });
      } catch (error) {
        console.error(error);
      }
    },
    createPerson: async (person) => {
      if (get().error) set({ error: false });
      try {
        const { data } = await axiosInstance.post(
          membersUri,
          person,
          getAuthConfig()
        );
        set((ps) => ({ people: [...ps.people, data] }));
      } catch (error) {
        set(() => ({
          error: true,
        }));
        console.error(error);
      }
    },
  };
});

export default usePeopleStore;
