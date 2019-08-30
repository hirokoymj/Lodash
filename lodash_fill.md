# Lodash _.fill vs Array.fill

- Fills elements of array with value.


## lodash _.fill method

**Example 1**
```js
var b = _.fill(new Array(8),0);
console.log(b); // [0,0,0,0,0,0,0,0]
```

**Example 2**
```js
fill(Array(Object.keys(this.props.tableHead).length), false)
```

**Example 3**
```js
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
```
<hr />

## The Array.fill vanilla js Array prototype method

```js
var b = new Array(8).fill(0);
console.log(b); // [0,0,0,0,0,0,0,0]
```


### References: 
- https://dustinpfister.github.io/2017/09/26/lodash_fill/
- https://lodash.com/docs/#fill
