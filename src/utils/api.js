import axios from 'axios'

const apiCall = ({data, method }) =>
new Promise((resolve, reject) => {
    const url = `https://private-eaf0d8-retailmockapp.apiary-mock.com/auth/login`
    axios.post(url, data)
    .then((res) => {
      console.log('Ini hasil fetch ====>>> ',res.data)
      // return res.data

      resolve(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  });

export default apiCall;
