const path = require('path'); // pre defined module --> builtin module of nodejs
//__dirname env variable ==> CWD / PWD
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}