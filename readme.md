# bit-require

A little better experience with Bit.dev



## How to use it?

Create a new instance of `Bit` and go!

```javascript
let Bit = require('bit-require');
let bit = new Bit("user", "collection?", "module?");
```

| Parameter  | Type    | Description                         |
| ---------- | ------- | ----------------------------------- |
| user       | string  | User name, whos module is it        |
| collection | string? | Collection name, where module is    |
| module     | string? | Exact module name in the collection |



### new Bit(user, collection, module)

Returns an imported bit-module

```javascript
let Bit = require('bit-require');
let bit = new Bit("user", "collection", "module");
// Returns a value of require('@bit/user.collection.module');
```

### new Bit(user, collection)

Then you can import a bit-module from this collection using `.require`

```javascript
let Bit = require('bit-require');
let bit = new Bit("user", "collection");


bit.require("module1");
// Returns a value of require('@bit/user.collection.module1');

bit.require("module2");
// Returns a value of require('@bit/user.collection.module2');
```

### new Bit(user)

Then you can import a bit-module from this users's collection using `.collection` or `.require`

```javascript
let Bit = require('bit-require');
let bit = new Bit("user");


bit.require("collection1", "module1");
// Returns a value of require('@bit/user.collection1.module1');

bit.require("collection2", "module2");
// Returns a value of require('@bit/user.collection2.module2');


let collection = bit.collection("collection");
// Then you can import a bit-module from this collection using `.require`

collection.require("module1");
// Returns a value of require('@bit/user.collection.module1');

collection.require("module2");
// Returns a value of require('@bit/user.collection.module2');
```

___

More coming soon...