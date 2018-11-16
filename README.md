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
"postinstall": "if test \"$NODE_ENV\" = \"production\" ; then npm run build ; fi ",
"start": "node server.js"
```

- server.js

```
const history = require('connect-history-api-fallback');
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
```
