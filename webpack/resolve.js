
const path = require('path');
module.exports = {
  extensions: ['.coffee', '.js', '.jsx'],
  alias: {
    modules: path.resolve(__dirname, '../', './public/modules'),
    components: path.resolve(__dirname, '../', './public/components'),
    assets: path.resolve(__dirname, '../', './public/assets'),
    pages: path.resolve(__dirname, '../', './public/pages'),
    service:path.resolve(__dirname,'../','./public/service'),
    actions: path.resolve(__dirname, '../', './public/actions'),
    reducers: path.resolve(__dirname, '../', './public/reducers')
  }
};