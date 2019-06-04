import {
  dealLidarData,
  dataPointSort,
  detachWaveData,
  dealPieLegend,
  dealCategoryData,
  dealLineData,
  dealEuropeData
} from "./util";

function drawLidarHeight(chart, data, location) {
  let lidarHeightData = dealLidarData(data.result, "height");
  chart.setOption({
    title: {
      text: `${location ? `${location}地区` : ""}雷达比与测量高度相关性分析`,
      subtext: `数据来源于${data.wavelength}波长观测`,
      x: "center"
    },
    tooltip: {
      show: true,
      trigger: "item",
      enterable: true,
      formatter: function(params) {
        var value = params.value;
        return `雷达比：${value[0]}<br>高度：${value[1]}km<br>波长：${
          value[2]
        }`;
      }
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "slider",
        show: true,
        yAxisIndex: [0],
        left: "93%",
        start: 0,
        end: 100
      },
      {
        type: "inside",
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "inside",
        yAxisIndex: [0],
        start: 0,
        end: 100
      }
    ],
    xAxis: {
      type: "value",
      name: "雷达比",
      scale: true
    },
    yAxis: {
      type: "value",
      name: "高度",
      scale: true
    },
    series: [
      {
        type: "effectScatter",
        symbolSize: 20,
        data: dataPointSort(lidarHeightData)
      },
      {
        type: "scatter",
        data: lidarHeightData
      }
    ]
  });
}

function drawLidarWave(chart, data) {
  let lidarWaveData = detachWaveData(data.result);
  let seriesData = [],
    legendData = [];
  if (lidarWaveData.wave355.length) {
    seriesData.push(generateSeriesItem(lidarWaveData.wave355, "355nm"));
    legendData.push("355nm");
  }
  if (lidarWaveData.wave532.length) {
    seriesData.push(generateSeriesItem(lidarWaveData.wave532, "532nm"));
    legendData.push("532nm");
  }
  if (lidarWaveData.wave351.length) {
    seriesData.push(generateSeriesItem(lidarWaveData.wave351, "351nm"));
    legendData.push("351nm");
  }
  if (lidarWaveData.wave1064.length) {
    seriesData.push(generateSeriesItem(lidarWaveData.wave1064, "1064nm"));
    legendData.push("1064nm");
  }
  chart.setOption({
    title: {
      text: "雷达比综合分析"
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
      formatter: function(params) {
        if (params.name != "") {
          return `${params.name}：${params.value}`;
        }
        return `${params.seriesName} :<br> 雷达比：${
          params.value[1]
        }<br>高度： ${params.value[0]}km`;
      },
      axisPointer: {
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
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "inside",
        yAxisIndex: [0],
        start: 0,
        end: 100
      }
    ],
    brush: {},
    legend: {
      data: legendData,
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
        name: "高度"
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
        name: "雷达比"
      }
    ],
    series: seriesData
  });
}

function generateSeriesItem(data, wavelength) {
  let seriesItem = {
    name: wavelength,
    type: "scatter",
    data: data,
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
      data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: "solid"
        }
      },
      data: [{ type: "average", name: "平均值" }, { xAxis: 160 }]
    }
  };
  return seriesItem;
}

function drawLidarDepo(chart, data) {
  let lidarDepoData = dealLidarData(data.result, "depo_value");
  chart.setOption({
    title: {
      text: "雷达比退偏比相关性分析",
      subtext: `数据来源于${data.wavelength}波长观测`,
      x: "center"
    },
    tooltip: {
      show: true,
      trigger: "item",
      enterable: true,
      formatter: function(params) {
        var value = params.value;
        return `雷达比：${value[0]}<br>退偏比：${value[1]}<br>波长：${
          value[2]
        }`;
      }
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "slider",
        show: true,
        yAxisIndex: [0],
        left: "93%",
        start: 0,
        end: 100
      },
      {
        type: "inside",
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "inside",
        yAxisIndex: [0],
        start: 0,
        end: 100
      }
    ],
    xAxis: {
      type: "value",
      name: "雷达比",
      scale: true
    },
    yAxis: {
      type: "value",
      name: "退偏比",
      scale: true
    },
    series: [
      {
        type: "effectScatter",
        symbolSize: 20,
        data: dataPointSort(lidarDepoData)
      },
      {
        type: "scatter",
        data: lidarDepoData
      }
    ]
  });
}

function drawLidarLine(chart, data) {
  let lineData = dealLineData(data);
  chart.setOption({
    title: {
      text: `数据来源于${lineData.location}地区${lineData.date}`
    },
    grid: {
      left: "3%",
      right: "7%",
      bottom: "3%",
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      showDelay: 0,
      axisPointer: {
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
      data: ["532nm", "1064nm"],
      left: "center"
    },
    xAxis: [
      {
        name: "时间",
        data: lineData.timeArr
      }
    ],
    yAxis: [
      {
        type: "value",
        min: 20,
        max: 100,
        name: "雷达比"
      }
    ],
    series: [
      {
        name: "532nm",
        type: "line",
        data: lineData.value532,
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
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        }
      },
      {
        name: "1064nm",
        type: "line",
        data: lineData.value1064,
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
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        }
      }
    ]
  });
}

function drawCategory(chart, data, title) {
  let categoryData = dealCategoryData(data);
  chart.setOption({
    title: {
      text: `气溶胶数据${title}柱形图`,
      subtext: "",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}"
    },
    xAxis: {
      type: "category",
      data: categoryData.xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: categoryData.seriesData,
        type: "bar"
      }
    ]
  });
}

function drawPie(chart, data, title) {
  chart.setOption({
    title: {
      text: `气溶胶数据库${title}饼形图`,
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
      data: dealPieLegend(data)
    },
    series: [
      {
        name: "数据来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  });
}

function drawEuropeData(chart, data) {
  let europeData = dealEuropeData(data);
  let seriesData = [],
    legendData = [];
  if (europeData.wave355.length) {
    seriesData.push(generateEuropeSeries(europeData.wave355, "355nm"));
    legendData.push("355nm");
  }
  if (europeData.wave532.length) {
    seriesData.push(generateEuropeSeries(europeData.wave532, "532nm"));
    legendData.push("532nm");
  }
  if (europeData.wave351.length) {
    seriesData.push(generateEuropeSeries(europeData.wave351, "351nm"));
    legendData.push("351nm");
  }
  if (europeData.wave1064.length) {
    seriesData.push(generateEuropeSeries(europeData.wave1064, "1064nm"));
    legendData.push("1064nm");
  }
  chart.setOption({
    title: {
      text: "计算所得雷达比综合分析"
    },
    grid: {
      left: "3%",
      right: "7%",
      bottom: "3%",
      containLabel: true
    },
    tooltip: {
      showDelay: 0,
      formatter: function(params) {
        if (params.name != "") {
          return `${params.name}：${params.value}`;
        }
        return `波长： ${params.seriesName}<br> 雷达比：${
          params.value[1]
        }<br>高度： ${params.value[0]}m`;
      },
      axisPointer: {
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
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0],
        start: 0,
        end: 100
      },
      {
        type: "inside",
        yAxisIndex: [0],
        start: 0,
        end: 100
      }
    ],
    brush: {},
    legend: {
      data: legendData,
      left: "center"
    },
    xAxis: [
      {
        type: "value",
        scale: true,
        axisLabel: {
          formatter: "{value} m"
        },
        splitLine: {
          show: false
        },
        name: "高度"
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
        name: "雷达比"
      }
    ],
    series: seriesData
  });
}

function generateEuropeSeries(data, wavelength) {
  let seriesItem = {
    name: wavelength,
    type: "scatter",
    data: data,
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
      data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
    }
  };
  return seriesItem;
}

export {
  drawLidarHeight,
  drawLidarWave,
  drawLidarDepo,
  drawLidarLine,
  drawCategory,
  drawPie,
  drawEuropeData
};
