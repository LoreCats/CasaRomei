cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-vuforia.VuforiaPlugin",
      "file": "plugins/cordova-plugin-vuforia/www/VuforiaPlugin.js",
      "pluginId": "cordova-plugin-vuforia",
      "clobbers": [
        "navigator.VuforiaPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-vuforia-sdk": "6.0.117",
    "cordova-plugin-vuforia": "3.2.1"
  };
});