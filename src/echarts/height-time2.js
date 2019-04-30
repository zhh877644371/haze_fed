export default {
  grid: {
    left: "3%",
    right: "7%",
    bottom: "3%",
    containLabel: true
  },
  tooltip: {
    // trigger: 'axis',
    showDelay: 0,
    // formatter: function (params) {
    //   if (params.value.length > 1) {
    //     return params.seriesName + ' :<br/>'
    //     + params.value[0] + 'km'
    //     + params.value[1];
    //   }
    //   else {
    //     return params.seriesName + ' :<br/>'
    //     + params.name + ' : '
    //     + params.value + 'kg ';
    //   }
    // },
    axisPointer:{
      show: true,
      type: "cross",
      lineStyle: {
        type: "dashed",
        width: 1
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {},
      brush: {
        type: ["rect", "polygon", "clear"]
      }
    }
  },
  brush: {},
  legend: {
    data: ["532nm", "355nm"],
    left: "center"
  },
  xAxis: [
    {
      // type: "value",
      // scale: true,
      // // axisLabel: {
      // //   formatter: "{value}:00"
      // // },
      // splitLine: {
      //   show: false
      // },
      name: "时间",
      data: [
        "5-24",
        "5-27",
        "5-28",
        "5-29",
        "5-30",
        "5-31",
        "6-01",
        "6-04",
        "6-05",
        "6-07",
        "6-08"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      min: 20,
      // scale: true,
      // axisLabel: {
      //   formatter: "{value}"
      // },
      splitLine: {
        show: false
      },
      name: "雷达比"
    }
  ],
  series: [
    {
      name: "532nm",
      type: "line",
      data: [
        61.56,
        69.39,
        77.36,
        78.68,
        96.66,
        86.32,
        71.26,
        86.19,
        82.6,
        79.19,
        77.26
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            color: "transparent",
            borderWidth: 1,
            borderType: "dashed"
          }
        }
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值"}]
      }
    },
    {
      name: "355nm",
      type: "line",
      data: [
        59.64,
        64.36,
        62.25,
        69.96,
        79.2,
        75.6,
        70.63,
        71.35,
        63.36,
        78.35,
        87.26
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            color: "transparent",
            borderWidth: 1,
            borderType: "dashed"
          }
        }
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值"}]
      }
    }
  ]
}