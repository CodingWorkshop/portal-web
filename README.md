[![Build Status](https://travis-ci.org/CodingWorkshop/portal-web.svg?branch=master)](https://travis-ci.org/CodingWorkshop/portal-web) [![Dependency Status](https://david-dm.org/CodingWorkshop/portal-web.svg)](https://david-dm.org/CodingWorkshop/portal-web) [![devDependency Status](https://david-dm.org/CodingWorkshop/portal-web/dev-status.svg)](https://david-dm.org/CodingWorkshop/portal-web?type=dev)

# portal-web

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### HeroKu

```
npm install --save express serve-static connect-history-api-fallback
```

- package.json

```
"postinstall": "node scripts/tasks/pack.js",
"start": "node scripts/express/server.js"
```

- pack.js

```
const {
    spawn
} = require('child_process');
 if (process.env.NODE_ENV === 'production') {
    return spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build'], {
        stdio: 'inherit'
    });
} else {
    console.log('Environment is not production.');
    console.log('Do not execute npm run build.')
}
```

- server.js

```
const history = require('connect-history-api-fallback');
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, '..', '..', 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
```
