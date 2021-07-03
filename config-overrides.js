const {alias} = require('react-app-rewire-alias');

/* config-overrides.js */

module.exports = function override(config, env) {
   alias({
      '@components': 'src/components',
      '@store': 'src/store',
      '@styles': 'src/styles',
    },
    {

    })(config);
   return config;
 }