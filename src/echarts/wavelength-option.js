export default {
  title: {
    text: "气溶胶数据库统计数据波长占比图",
    subtext: "共7773条数据",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["532nm", "355nm", "351nm", "1064nm"]
  },
  series: [
    {
      name: "数据来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        {
          value: 4897,
          name: "532nm"
        },
        {
          value: 3001,
          name: "355nm"
        },
        {
          value: 142,
          name: "351nm"
        },
        {
          value: 8,
          name: "1064nm"
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