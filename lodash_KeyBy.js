const keyBy = require('lodash/keyBy');
const forEach = require('lodash/forEach');
const get = require('lodash/get');
const map = require('lodash/map');


const posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
];

const result1 = keyBy(posts, "id");
console.log(result1);
// { '1abc': { id: '1abc', title: 'First blog post', content: '...' },
//   '2abc': { id: '2abc', title: 'Second blog post', content: '...' } }
console.log('====================');



const result2 = keyBy(posts, function(post){
    return post.title;
});
console.log(result2);
// { 'First blog post': { id: '1abc', title: 'First blog post', content: '...' },
//   'Second blog post': { id: '2abc', title: 'Second blog post', content: '...' } }
console.log('====================');


const googleObj = [
    {long_name: "11236", short_name: "11236", types: ["street_number"]},
    {long_name: "Playa Court", short_name: "Playa Ct", types: ["route"]},
    {long_name: "Blanco - Culver Crest", short_name: "Blanco - Culver Crest", types: ["neighborhood", "political"]},
    {long_name: "Culver City", short_name: "Culver City", types: ["locality", "political"]},
    {long_name: "Los Angeles County", short_name: "Los Angeles County", types: ["administrative_area_level_2", "political"]},
    {long_name: "California", short_name: "CA", types: ["administrative_area_level_1", "political"]},
    {long_name: "United States", short_name: "US", types: ["country", "political"]},
    {long_name: "90230", short_name: "90230", types: ["postal_code"]},
    {long_name: "6127", short_name: "6127", types: ["postal_code_suffix"]}
]

const googleObj2 = keyBy(googleObj, (obj)=>{ 
    return obj.types[0];
});
console.log(googleObj2);

