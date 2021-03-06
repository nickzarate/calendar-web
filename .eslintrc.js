module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "promise",
    "react"
  ],
  "globals": {
    "__DEV__": false,
    "process.env.NODE_ENV": false
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "promise/param-names": "error",
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "react/prop-types": 0
  }
};
