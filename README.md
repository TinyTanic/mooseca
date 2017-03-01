# Mooseca
A beautiful music player inspired by a moose


## Developement
1. `$ yarn install` or `$ npm install`
2. `$ npm run desktop:dev` to watch sources with webpack-dev-server and run electron

## Build
1. select an appropriate 'arch' and 'platform' in 'desktop/webpack.config.production.js':
```javascript
...
plugins: {
    ...
    new ElectronPackager({
        dir: path.resolve(__dirname, 'dist/'),
        out: path.resolve(__dirname, 'build/'),
        arch: 'all', // << here
        platform: 'linux', // << and here
    })
}
```
2. `$ npm run desktop:build`
3. stars on github
