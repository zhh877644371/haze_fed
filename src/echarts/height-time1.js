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
      data: ["3-15", "4-01", "4-02", "4-03", "4-08", "4-12", "4-15"]
    }
  ],
  yAxis: [
    {
      type: "value",
      min: 20,
      max: 100,
      name: "雷达比",
      // data: [20, 40, 60, 80, 100, 120]
    }
  ],
  series: [
    {
      name: "532nm",
      type: "line",
      data: [33.6, 51.39, 37.36, 69.68, 53.6, 50.8, 43.96],
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
      data: [46.8, 43.56, 35.62, 45.23, 54.2, 48.6, 52.63],
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