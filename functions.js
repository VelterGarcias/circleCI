const axios = require('axios');

const functions = {
  soma: (valor1, valor2) => valor1 + valor2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
      const user = { firstName: 'Velter'}
      user['lastName'] = 'Garcias'
      return user
  },

  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/9')
  .then(res => res.data)
  .catch(err => console.error(err))
};

module.exports = functions;
