// 服务器端口
var server = "http://10.203.2.223:3030";
var client = "http://10.203.2.223:9090";

// 本地服务端口
// var server = "http://127.0.0.1:3030";
// var client = "http://localhost:8080";

// chinaMap路由跳转配置
var ProvinceMap = {
  台湾: "Taiwan",
  浙江: "the eastern China",
  江苏: "the eastern China",
  上海: "the eastern China",
  广东: "Guangzhou"
};

// worldMap路由跳转配置
var CountryMap = {
  中国: "China",
  意大利: "Italy",
  美国: "US",
  韩国: "Korea",
  希腊: "Greece",
  泰国: "Thailand",
  日本: "Japan",
  德国: "Germany",
  印度: "India",
  沙特阿拉伯: "Saudi Arabia",
  南非: "Africa",
  澳大利亚: "Atlantic",
  巴西: "Pacific",
  佛得角共和国: "Cape Verde"
};

export { server, client, ProvinceMap, CountryMap };
