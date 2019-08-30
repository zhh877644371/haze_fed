export default {
  title: {
    text: "气溶胶雷达比数据地图分布",
    left: "center"
  },
  tooltip: {}, // 鼠标移到图里面的浮动提示框
  visualMap: {
    //左侧小柱子的配置
    min: 0, // 最小值
    max: 379, //最大值
    left: "left", // 定位左边
    top: "bottom", // 定位底部
    text: ["数据量", "不存在"], // 上下两个文字
    seriesIndex: [1],
    inRange: {
      color: ["#d5e0ea", "#0904e6"] // 深浅颜色
    },
    calculable: true // 显示与否
  },
  geo: {
    map: "china", // 表示中国地图
    roam: true,
    label: {
      normal: {
        show: true, // 是否显示对应地名
        textStyle: {
          color: "rgba(0,0,0,0.4)"
        }
      }
    },
    itemStyle: {
      normal: {
        borderColor: "rgba(0, 0, 0, 0.2)"
      },
      emphasis: {
        areaColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    }
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "geo" // 对应上方配置
    },
    {
      name: "存在数据", // 浮动框的标题
      type: "map",
      geoIndex: 0,
      data: [
        // 只有三分数据是真实的，（上海，浙江，苏州）（广州）（台湾），其余是为了展示数据比较多，写死的数据
        { name: "北京", value: 150 },
        { name: "天津", value: 135 },
        { name: "上海", value: 292 }, // 真
        { name: "重庆", value: 111 },
        { name: "河北", value: 0 },
        { name: "河南", value: 160 },
        { name: "云南", value: 60 },
        { name: "辽宁", value: 0 },
        { name: "黑龙江", value: 0 },
        { name: "湖南", value: 120 },
        { name: "安徽", value: 0 },
        { name: "山东", value: 100 },
        { name: "新疆", value: 80 },
        { name: "江苏", value: 292 }, // 真
        { name: "浙江", value: 292 }, // 真
        { name: "江西", value: 0 },
        { name: "湖北", value: 100 },
        { name: "广西", value: 0 },
        { name: "甘肃", value: 0 },
        { name: "山西", value: 60 },
        { name: "内蒙古", value: 50 },
        { name: "陕西", value: 0 },
        { name: "吉林", value: 166 },
        { name: "福建", value: 190 },
        { name: "贵州", value: 0 },
        { name: "广东", value: 71 + 308 },
        { name: "青海", value: 0 },
        { name: "西藏", value: 0 },
        { name: "四川", value: 60 },
        { name: "宁夏", value: 0 },
        { name: "海南", value: 0 },
        { name: "台湾", value: 310 }, // 真
        { name: "香港", value: 120 },
        { name: "澳门", value: 110 }
      ]
    }
  ]
}