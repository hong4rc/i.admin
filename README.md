# i.admin

> Check if the process is running as Administrator on Windows
> Compact version of `is-admin`


## Install

```
$ npm install i.admin
```


## Usage

```js
const isAdmin = require('i.admin');

console.log(isAdmin());
//=> false

```


## API

### isAdmin()

Returns a `boolean` indicating whether the process is running as Administrator.


## Credit

- `i.admin` base on [is-admin](https://github.com/sindresorhus/is-admin)
