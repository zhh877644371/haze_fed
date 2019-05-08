function dealLidarData(arr, param) {
  if (!Array.isArray(arr)) {
    return;
  }
  let result = [],
    tmp = [];
  arr.forEach(item => {
    tmp = [item.value || 0, item[param] || 0, item.wavelength || "未知波长"];
    result.push({
      paper_id: item.paper_id,
      value: tmp
    });
  });
  return result;
}

function dataPointSort(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  // 判断数组中每一项是否为数组
  if (
    !arr.every(item => {
      return Array.isArray(item);
    })
  ) {
    return;
  }
  let result = [];
  arr.sort((a, b) => a[0] - b[0]);
  result.push(arr[0], arr[arr.length - 1]);
  arr.sort((a, b) => a[1] - b[1]);
  result.push(arr[0], arr[arr.length - 1]);
  return result;
}

function detachWaveData(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let result = {},
    wave355 = [],
    wave532 = [],
    tmp = [];
  arr.forEach(item => {
    tmp = [item.height || 0, item.value || 0, item.wavelength || "未知波长"];
    if (item.wavelength == "355nm") {
      wave355.push({
        paper_id: item.paper_id,
        value: tmp
      });
    } else if (item.wavelength == "532nm") {
      wave532.push({
        paper_id: item.paper_id,
        value: tmp
      });
    }
  });
  result.wave355 = wave355;
  result.wave532 = wave532;
  return result;
}

function dealPieLegend(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let result = [];
  arr.forEach(item => {
    if (typeof item === "object" && item.name) {
      result.push(item.name);
    }
  });
  return result;
}

function dealCategoryData(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let result = {},
    xAxisData = [],
    seriesData = [];
  arr.forEach(item => {
    if (typeof item === "object") {
      if (item.name && item.value) {
        xAxisData.push(item.name);
        seriesData.push(item.value);
      }
    }
  });
  result.xAxisData = xAxisData;
  result.seriesData = seriesData;
  return result;
}

function dealLineData(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let data = arr.filter(
    item => item.year == "2009" && item.location_tip == "Bozeman, Montana"
  );
  console.log("data", data);
  let timeArr = [],
    value532 = [],
    value1064 = [],
    date = "",
    result = {};
  data.forEach(item => {
    if (item.wavelength == "532nm") {
      value532.push({
        value: item.value,
        paper_id: item.paper_id
      });
    } else if (item.wavelength == "1064nm") {
      value1064.push({
        value: item.value,
        paper_id: item.paper_id
      });
    }
    let tmp = item.time_tip.split(",");
    date = tmp[0];
    if (!timeArr.includes(tmp[1])) {
      timeArr.push(tmp[1]);
    }
  });
  result.timeArr = timeArr;
  result.value532 = value532;
  result.value1064 = value1064;
  result.date = date;
  result.location = "Bozeman";
  return result;
}

export {
  dealLidarData,
  dataPointSort,
  detachWaveData,
  dealPieLegend,
  dealCategoryData,
  dealLineData
};
