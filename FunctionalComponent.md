# Functional Component

- This function is a valid React component because it accepts a single **props**

#### Props
```js
const RentalStatusIndicator = (props) =>{
  const { key, onClick, status="" } = props;  
  let isLate = status.includes('late') ? true : false;
  return (
    <td
      key={key}
      onClick={onClick}
      className={isLate ? "status-late-text" : ""} 
    >
      {status}
    </td>    
  )
}
```

#### Destructuring Props in React

```js
const RentalStatusIndicator = ({ key, onClick, status="" }) =>{
  let isLate = status.includes('late') ? true : false;
  return (
    <td
      key={key}
      onClick={onClick}
      className={isLate ? "status-late-text" : ""} 
    >
      {status}
    </td>    
  )
}
```

