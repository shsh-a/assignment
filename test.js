// 2 arrays
// 1000 objects with 6 random attributes
// sort in increasing order
const utils = require('./utils');
const sort = require('./sort');
const {performance} = require('perf_hooks');

/**
 *  compare id of 2 objects, comparator function for built in sort
 * @param {*} a object
 * @param {*} b object
 * @return {number}
 */
function compare( a, b ) {
  if ( a.id < b.id ) {
    return -1;
  }
  if ( a.id > b.id ) {
    return 1;
  }
  return 0;
}

/**
 * main driver functin
 */
function main() {
  const csv = ['size', 'generating', 'builtinsort', 'mergesort',
    'bubblesort', '\n'];
  let start = 0;
  let end = 0;

  for (let i = 10; i < 10000001; i = i * 10) {
    console.log(`Sample size is ${i}`);
    csv.push(i);

    start = performance.now();
    let arr1 = utils.generateObjects(i);
    let arr2 = utils.generateObjects(i);
    end = performance.now();
    console.log(`Generating Objects: ${end - start}ms`);
    csv.push(end-start);

    // utils.printArr(arr1);

    start = performance.now();
    arr1.sort(compare);
    arr2.sort(compare);
    end = performance.now();
    console.log(`Built In sort: ${end - start}ms`);
    csv.push(end-start);

    start = performance.now();
    arr1 = sort.mergeSort(arr1);
    arr2 = sort.mergeSort(arr2);
    end = performance.now();
    console.log(`Merge Sort: ${end - start}ms`);
    csv.push(end-start);

    // bubble sort simply takes too much time to complete, so skipping...
    if (i > 10000) {
      csv.push(0);
      csv.push('\n');
      continue;
    }
    start = performance.now();
    arr1 = sort.bubbleSort(arr1);
    arr2 = sort.bubbleSort(arr2);
    end = performance.now();
    console.log(`Bubble Sort ${end - start}ms`);
    csv.push(end-start);
    csv.push('\n');
  }

  console.log(csv.toString());
}

main();
