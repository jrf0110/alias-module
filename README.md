# Alias Module

> Alias your project modules

__Usage:__

Project Directory Structure:

```
- lib/
  - helpers.js
  - utils.js
- app.js
- config.js
```

```javascript
var alias = require('alias-module');

alias( 'utils', './lib/utils.js' );
```

Result:

```
- lib/
  - helpers.js
  - utils.js
- node_modules/
  - utils/
    - index.js -> lib/utils.js
- app.js
- config.js
```

__app.js__

```
var utils = require('utils');
```

__Install:__

```
npm install -S alias-module
```