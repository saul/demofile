module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "eqeqeq": ["error", "smart"],
    "valid-jsdoc": "error"
  }
};
