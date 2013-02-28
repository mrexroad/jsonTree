# Usage
```js
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
```html
<ul>
  <li>
    <span>name: </span>Eric
  </li>
  <li>
    <span>age: </span>26
  </li>
  <li>
    <span>info: </span>
    <ul>
      <li>
        <span>id: </span>123124
      </li>
      <li>
        <span>cp: </span>8110
      </li>
      <li>
        <span>phone: </span>902342353
      </li>
    </ul>
  </li>
</ul>
```
<ul><li><span>name: </span>Eric</li><li><span>age: </span>26</li><li><span>info: </span><ul><li><span>id: </span>123124</li><li><span>cp: </span>8110</li><li><span>phone: </span>902342353</li></ul></li></ul>

# Options
Must be a json object.

#### parentLabel
Type: `string`
default: `ul`

Html label of the parent html element.

```js
...
var options = { parentLabel: 'div' };
var html = jsontree(json, options);
...
```

Also you can specify `class` and `id` properties:

```js
...
var options = { parentLabel: 'div.myClass#myID' };
var html = jsontree(json, options);
...
```

#### childLabel
Type: `string`
default: `li`

Html label of the child html element. Also you can specify `class` and `id` properties

```js
...
var options = { childLabel: 'div' };
var html = jsontree(json, options);
...
```

#### keyLabel
Type: `string`
default: `span`

Html label of the key html element. Also you can specify `class` and `id` properties

```js
...
var options = { keyLabel: 'div' };
var html = jsontree(json, options);
...
```

#### keyTemplate
Type: `string`
default: `'%element%: '`

Template of the key.

```js
...
var options = { keyTemplate: '%element% =>' };
var html = jsontree(json, options);
...
```

```html
...
<ul>
      <li>
        <span>id =></span>123124
      </li>
...
```

# TODO
- More examples.