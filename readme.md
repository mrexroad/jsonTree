# Usage
```
var json = { 
  "name": "Eric", 
  "age": "26", 
  "info": {
    "id": 123124 ,
    "cp": 08110, 
    "phone": 902342353
  }
};

var html = jsontree(json);
```
```
<ul>
  <li><span>name: </span>Eric</li>
</ul>
<ul>
  <li><span>age: </span>26</li>
</ul>
<ul>
  <li><span>info: </span>
    <ul>
      <li><span>id: </span>123124</li>
    </ul>
    <ul>
      <li><span>cp: </span>8110</li>
    </ul>
    <ul>
      <li><span>phone: </span>902342353</li>
    </ul>
  </li>
</ul>
```
<ul><li><span>name: </span>Eric</li></ul><ul><li><span>age: </span>26</li></ul><ul><li><span>info: </span><ul><li><span>id: </span>123124</li></ul><ul><li><span>cp: </span>8110</li></ul><ul><li><span>phone: </span>902342353</li></ul></li></ul>

# TODO

- examples
- perfomance
