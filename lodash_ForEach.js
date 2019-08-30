const forEach = require('lodash/forEach');

forEach([1, 2], function(value) {
  console.log(value);
});
console.log("------------");


forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
console.log("------------");


const myArray2 = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
];
forEach(myArray2, (value)=>{
  console.log(value);
});
console.log("------------");


const myObject2 = {'color':'red', 'name': 'redName'};
forEach(myObject2, (value, key)=>{
  console.log(`key: ${key}, value: ${value}`);
});
console.log("------------");


