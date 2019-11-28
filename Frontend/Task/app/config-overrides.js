/* module.exports = function override(config, env) {
  var moduleObj = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  };
  

  config.module.rules = [...config.module.rules, ...moduleObj.module.rules];

  return config;
};
 */

const rewireTypingsForCssModule = require("react-app-rewire-typings-for-css-module");

module.exports = {
  webpack: function(config, env) {
    /**
     * Add this line
     */
    config = rewireTypingsForCssModule(config);
    return config;
  }
};
