export default {
  title: {
    text: "气溶胶数据观测年份柱形图",
    subtext: "",
    x: "center"
  },
  xAxis: {
    type: "category",
    data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2009, 2011, 2012]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [130, 1179, 381, 936, 2176, 158, 64, 2066, 17, 22, 357],
      type: "bar"
    }
  ]
}