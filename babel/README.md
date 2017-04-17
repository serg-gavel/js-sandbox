### Install the Babel CLI and a preset

#### `Commands:`
>node -v
>
>npm -v
>
>npm init -y
>
>npm install babel-cli babel-core babel-preset-es2015 --save-dev
>
>npm run build

`scripts for package.json`
```js
"scripts": {
    "build": "babel src -d dist --presets es2015",
    "watch": "babel src -d dist --presets es2015 -w"
  },
```
