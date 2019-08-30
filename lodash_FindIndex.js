const findIndex = require('lodash/findIndex');

const myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
const result4 = findIndex(myArray, (data) => { return data.color == 'green'; });
console.log(result4); //2


