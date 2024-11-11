module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",  // 你可以根据需要修改环境变量的名字
        "moduleName": "@env",  // 使用 @env 来导入变量
        "path": ".env",  // .env 文件的位置
        "safe": false,  // 设置是否使用安全模式
        "allowUndefined": true,  // 允许未定义的环境变量
        "verbose": false  // 是否显示详细日志
      }]
    ]
  };
};
