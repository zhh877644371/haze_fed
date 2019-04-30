export default {
  title: {
    text: "Comparison of 532nm and 355nm at the same height"
  },
  grid: {
    left: "3%",
    right: "7%",
    bottom: "3%",
    containLabel: true
  },
  tooltip: {
    // trigger: 'axis',
    showDelay: 0,
    formatter: function (params) {
      if (params.value.length > 1) {
        return params.seriesName + ' :<br/>'
        + params.value[0] + 'km'
        + params.value[1];
      }
      else {
        return params.seriesName + ' :<br/>'
        + params.name + ' : '
        + params.value + 'kg ';
      }
    },
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
    data: ["355nm", "532nm"],
    left: "center"
  },
  xAxis: [
    {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value} km"
      },
      splitLine: {
        show: false
      },
      name: "height"
    }
  ],
  yAxis: [
    {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value}"
      },
      splitLine: {
        show: false
      },
      name: "lidar ratio"
    }
  ],
  series: [
    {
      name: "532nm",
      type: "scatter",
      data: [
        [0.73, 104.14],
        [0.75, 104.11],
        [0.77, 103.89],
        [0.78, 103.64],
        [0.84, 102.75],
        [0.88, 102.24],
        [0.91, 101.73],
        [0.93, 101.36],
        [0.95, 101.1],
        [0.98, 100.34],
        [1.04, 96.03],
        [1.06, 94.5],
        [1.08, 92.98],
        [1.22, 96.66],
        [1.24, 100.08],
        [1.26, 103.76],
        [1.28, 107.32],
        [1.29, 110.87],
        [1.31, 114.42],
        [1.33, 116.19],
        [1.35, 113.03],
        [1.37, 108.2],
        [1.39, 103.51],
        [1.4, 98.69],
        [1.42, 93.87],
        [1.44, 89.3],
        [1.46, 87.02],
        [1.48, 88.42],
        [1.5, 90.19],
        [1.51, 91.97],
        [1.53, 93.49],
        [1.55, 95.27],
        [1.57, 96.91],
        [1.59, 98.69],
        [1.6, 100.34],
        [1.62, 101.99],
        [1.64, 103.64],
        [1.7, 107.06],
        [1.71, 105.54],
        [1.73, 103.76],
        [1.75, 101.99],
        [1.77, 100.21],
        [1.79, 98.44],
        [1.81, 96.66],
        [1.82, 94.88],
        [1.84, 93.11],
        [1.86, 91.46],
        [1.88, 89.81],
        [1.9, 88.03],
        [1.91, 86.26],
        [1.93, 84.86],
        [1.95, 84.48],
        [1.97, 84.61],
        [1.99, 84.61],
        [2.01, 84.99],
        [2.02, 85.24],
        [2.04, 86.39],
        [2.06, 88.67],
        [2.12, 99.07],
        [2.17, 104.78],
        [2.19, 99.45],
        [2.21, 91.84],
        [2.22, 84.1],
        [2.24, 76.36],
        [2.28, 61.02],
        [2.3, 60.51],
        [2.33, 72.56],
        [2.35, 78.65],
        [2.37, 84.86],
        [2.39, 90.69]
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            color: "transparent",
            borderWidth: 1,
            borderType: "dashed"
          }
        },
        data: [
          [
            {
              name: "distribution interval of 532nm",
              xAxis: "min",
              yAxis: "min"
            },
            {
              xAxis: "max",
              yAxis: "max"
            }
          ]
        ]
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值"}]
      },
      markLine: {
        lineStyle: {
          normal: {
            type: "solid"
          }
        },
        data: [{ type: "average", name: "平均值" }, { xAxis: 160 }]
      }
    },
    {
      name: "355nm",
      type: "scatter",
      data: [
        [0.73, 81.56],
        [0.75, 81.69],
        [0.77, 81.31],
        [0.78, 81.44],
        [0.84, 75.86],
        [0.88, 74.33],
        [0.91, 73.07],
        [0.93, 72.43],
        [0.95, 71.8],
        [0.98, 70.78],
        [1.04, 70.27],
        [1.06, 70.02],
        [1.08, 69.77],
        [1.22, 66.22],
        [1.24, 62.41],
        [1.26, 58.6],
        [1.28, 54.67],
        [1.29, 44.4],
        [1.31, 44.02],
        [1.33, 44.14],
        [1.35, 44.9],
        [1.37, 44.9],
        [1.39, 58.48],
        [1.4, 63.55],
        [1.42, 68.62],
        [1.44, 73.44],
        [1.46, 76.23],
        [1.48, 74.84],
        [1.5, 72.81],
        [1.51, 70.66],
        [1.53, 68.62],
        [1.55, 66.85],
        [1.57, 64.82],
        [1.59, 64.95],
        [1.6, 65.2],
        [1.62, 65.45],
        [1.64, 65.71],
        [1.7, 66.47],
        [1.71, 68.62],
        [1.73, 70.66],
        [1.75, 72.94],
        [1.77, 75.1],
        [1.79, 77.25],
        [1.81, 79.03],
        [1.82, 72.39],
        [1.84, 76.36],
        [1.86, 74.59],
        [1.88, 72.3],
        [1.9, 67.61],
        [1.91, 67.61],
        [1.93, 67.48],
        [1.95, 67.11],
        [1.97, 66.98],
        [1.99, 64.44],
        [2.01, 63.17],
        [2.02, 61.9],
        [2.04, 60.89],
        [2.06, 60.63],
        [2.12, 61.14],
        [2.17, 61.9],
        [2.19, 62.92],
        [2.21, 64.06],
        [2.22, 65.08],
        [2.24, 66.09],
        [2.28, 67.86],
        [2.3, 67.99],
        [2.33, 67.23],
        [2.35, 66.72],
        [2.37, 66.22],
        [2.39, 65.71]
      ],
      markArea: {
        silent: true,
        itemStyle: {
          normal: {
            color: "transparent",
            borderWidth: 1,
            borderType: "dashed"
          }
        },
        data: [
          [
            {
              name: "distribution interval of 355nm",
              xAxis: "min",
              yAxis: "min"
            },
            {
              xAxis: "max",
              yAxis: "max"
            }
          ]
        ]
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值"}]
      },
      markLine: {
        lineStyle: {
          normal: {
            type: "solid"
          }
        },
        data: [{ type: "average", name: "平均值" }, { xAxis: 170 }]
      }
    }
  ]
}