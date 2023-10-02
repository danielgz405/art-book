const API = 'http://192.168.0.5:5050';

export const endPoints = {
  auth: {
    login: `${API}/login`,
  },
  users: {
    profile: (userId) => `${API}/profile/${userId}`,
    createUser: `${API}/signup`,
  },
};
