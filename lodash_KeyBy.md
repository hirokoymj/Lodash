# lodash - KeyBy

**_.keyBy(collection, [iteratee=_.identity])**
- Creates new objects with a specific property.


**Q1**
```js
const posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
];
const result1 = keyBy(posts, "id");
```

**Q1: Answer**
```js
{ '1abc': { id: '1abc', title: 'First blog post', content: '...' },
  '2abc': { id: '2abc', title: 'Second blog post', content: '...' } }
```
<hr />


**Q2**
```js
const posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
];
const result2 = keyBy(posts, function(post){
    return post.title;
});
```

**Q2: Answer**
```js
{ 'First blog post': { id: '1abc', title: 'First blog post', content: '...' },
  'Second blog post': { id: '2abc', title: 'Second blog post', content: '...' } }
```
<hr />


**Q3**
```js
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
```

**Q3: Answer**
```js
{ street_number:
   { long_name: '11236',
     short_name: '11236',
     types: [ 'street_number' ] },
  route:
   { long_name: 'Playa Court',
     short_name: 'Playa Ct',
     types: [ 'route' ] },
  neighborhood:
   { long_name: 'Blanco - Culver Crest',
     short_name: 'Blanco - Culver Crest',
     types: [ 'neighborhood', 'political' ] },
  locality:
   { long_name: 'Culver City',
     short_name: 'Culver City',
     types: [ 'locality', 'political' ] },
  administrative_area_level_2:
   { long_name: 'Los Angeles County',
     short_name: 'Los Angeles County',
     types: [ 'administrative_area_level_2', 'political' ] },
  administrative_area_level_1:
   { long_name: 'California',
     short_name: 'CA',
     types: [ 'administrative_area_level_1', 'political' ] },
  country:
   { long_name: 'United States',
     short_name: 'US',
     types: [ 'country', 'political' ] },
  postal_code:
   { long_name: '90230',
     short_name: '90230',
     types: [ 'postal_code' ] },
  postal_code_suffix:
   { long_name: '6127',
     short_name: '6127',
     types: [ 'postal_code_suffix' ] } }
```
<hr />

#### References:

- https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d

- https://lodash.com/docs/4.17.14#keyBy
