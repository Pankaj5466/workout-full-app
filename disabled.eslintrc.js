module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "no-const-assign": 2,
    "react/prop-types": "off",
    "semi": "off",

    "no-unused-vars": "off", // Temp off
    "quotes": 0,
    "quote-props": 0,
    "indent": 0,
    "padded-blocks": 0,
    "no-trailing-spaces": 0
  }
}
