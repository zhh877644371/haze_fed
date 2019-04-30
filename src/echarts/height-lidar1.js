export default {
  title: {
    text: "雷达比测量高度相关性分析",
    subtext: "数据来源于532nm波长观测",
    x: "center"
  },
  xAxis: {
    type: "value",
    name: "高度",
    scale: true
  },
  yAxis: {
    type: "value",
    name: "雷达比",
    scale: true
  },
  series: [
    {
      type: "effectScatter",
      symbolSize: 20,
      // data: [[40.08, 27], [31.81, 1.07]]
    },
    {
      type: "scatter",
      data: [
        [5.36, 20.73],
        [5.31, 47.22],
        [5.25, 63.89],
        [5.19, 66.03],
        [5.19, 65.81],
        [5.13, 72.65],
        [5.07, 25.64],
        [5.01, 20.51],
        [4.95, 21.79],
        [4.89, 26.5],
        [4.83, 7.69],
        [4.77, 5.56],
        [4.71, 7.05],
        [4.53, 6.2],
        [3.93, 7.26],
        [3.87, 5.77],
        [3.75, 3.85],
        [3.61, 6.84],
        [3.58, 9.19],
        [3.52, 10.26],
        [3.46, 23.72],
        [3.4, 28.42],
        [3.34, 35.26],
        [3.28, 24.57],
        [3.22, 25],
        [3.16, 22.86],
        [3.15, 23.08],
        [3.09, 24.79],
        [3.03, 22.65],
        [2.98, 22.01],
        [2.92, 18.16],
        [2.86, 31.2],
        [2.74, 52.99],
        [2.68, 44.66],
        [2.62, 40.81],
        [2.56, 63.03],
        [2.5, 62.18],
        [2.44, 56.84],
        [2.37, 53.21],
        [2.32, 59.83],
        [2.25, 75.43],
        [2.2, 85.9],
        [2.14, 60.26],
        [2.08, 63.68],
        [2.03, 47.44],
        [1.96, 61.32],
        [1.9, 62.18],
        [1.84, 58.76],
        [1.78, 48.5],
        [1.72, 44.87],
        [1.66, 43.59],
        [1.6, 50.85],
        [1.54, 48.93],
        [4.48, 56.41],
        [1.42, 63.46],
        [1.36, 67.09],
        [1.3, 53.42],
        [1.25, 45.94],
        [1.19, 56.41],
        [1.13, 70.3],
        [1.07, 67.31],
        [1.01, 53.42],
        [0.95, 56.2],
        [0.88, 53.63],
        [0.82, 59.4],
        [0.4, 90.6],
        [0.38, 90.6]
      ]
    }
  ]
}