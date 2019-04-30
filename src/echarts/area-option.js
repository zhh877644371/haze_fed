export default {
  title: {
    text: "气溶胶数据库统计数据地区占比图",
    subtext: "",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: [
      "China",
      "Italy",
      "US",
      "Korea",
      "Greece",
      "Thailand",
      "Japan",
      "Germany",
      "India",
      "Africa",
      "Atlantic",
      "Pacific"
    ]
  },
  series: [
    {
      name: "数据来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        {
          value: 981,
          name: "China"
        },
        {
          value: 602,
          name: "Italy"
        },
        {
          value: 377,
          name: "US"
        },
        {
          value: 329,
          name: "Korea"
        },
        {
          value: 77,
          name: "Greece"
        },
        {
          value: 909,
          name: "Thailand"
        },
        {
          value: 2462,
          name: "Japan"
        },
        {
          value: 557,
          name: "Germany"
        },
        {
          value: 304,
          name: "India"
        },
        {
          value: 597,
          name: "Africa"
        },
        {
          value: 278,
          name: "Atlantic"
        },
        {
          value: 298,
          name: "Pacific"
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}