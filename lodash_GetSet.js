const set = require('lodash/set');
const get = require('lodash/get');
const forEach = require('lodash/forEach'); 



const user = {
  name: 'pentacode',
  location: 'house',
  occupation: {
    title: 'developer',
    experience: 'senior',
    skillsets: ['javascript']
  }
}


// const userSkill = get(user, 'occupation.skillsets[2]', '');
// console.log(userSkill);

// set(user, 'occupation,skillsets[1]', 'css');
// console.log(user);


set(user, 'occupation.skillsets[0]', 'ruby');
set(user, ['occupation', 'responsibilites'], ['documentation, tests']);
set(user, 'lastName', "Yamaji");



