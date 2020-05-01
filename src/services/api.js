import axios from 'axios';

export const getFollowers = username => {
  return axios.get(`https://api.github.com/users/${username}/followers`);
};

export const getRepos = username => {
  return axios.get(`https://api.github.com/users/${username}/repos`);
};