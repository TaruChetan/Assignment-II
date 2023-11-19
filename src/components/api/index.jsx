import axios from "axios";
export const getUser = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(res=>resolve(res))
    .catch(err=>reject(err))
  });
};
