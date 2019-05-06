function dealLidarData(arr, param) {
  if (!Array.isArray(arr)) {
    return;
  }
  let result = [],
    tmp = [];
  arr.forEach(item => {
    tmp = [item.value || 0, item[param] || 0, item.wavelength || "未知"];
    result.push(tmp);
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
    tmp = [item.value || 0, item.height || 0];
    if (item.wavelength == "355nm") {
      wave355.push(tmp);
    } else if (item.wavelength == "532nm") {
      wave532.push(tmp);
    }
  });
  result.wave355 = wave355;
  result.wave532 = wave532;
  console.log("result", result);
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

export {
  dealLidarData,
  dataPointSort,
  detachWaveData,
  dealPieLegend,
  dealCategoryData
};
