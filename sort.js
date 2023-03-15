
/**
  * sort an array of objects by id
  * @param {[]} arr array of objects
  * @return {[]} sorted array of objects
  */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j].id > arr[j + 1].id) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

/**
  * sort an array of objects by id
  * @param {[]} arr array of objects
  * @return {[]} sorted array of objects
  */
function mergeSort(arr) {
  const mid = parseInt(arr.length / 2);
  if (arr.length > 1) {
    const a1 = arr.slice(0, mid);
    const a2 = arr.slice(mid, arr.length);
    mergeSort(a1);
    mergeSort(a2);
    let i = j = k = 0;
    while (i < a1.length && j < a2.length) {
      if (a1[i].id < a2[j].id) {
        arr[k++] = a1[i++];
      } else {
        arr[k++] = a2[j++];
      }
    }

    while (i < a1.length) {
      arr[k++] = a1[i++];
    }

    while (j < a2.length) {
      arr[k++] = a2[j++];
    }
  }

  return arr;
}
module.exports = {bubbleSort, mergeSort};
