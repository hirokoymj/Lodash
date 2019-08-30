const filter = require('lodash/filter');

const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

const result1 = filter(users, (data) => { return !data.active; });
console.log(result1);
//[ { user: 'fred', age: 40, active: false } ]
console.log('-------');
  
var employees = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

const result2 = filter(employees, (data) => { return data.skill === 'css'});
console.log(result2);
// [ { skill: 'css', user: 'Bill' },
//   { skill: 'css', user: 'Sue' } ]

console.log('-------');

const result3 = filter(employees, (data) => { return data.skill === 'javascript'});
console.log(result3);
// [ { skill: 'javascript', user: 'Chad' },
//   { skill: 'javascript', user: 'Bill' },
//   { skill: 'javascript', user: 'Sue' } ]

