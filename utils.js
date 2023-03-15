
/**
 * generates random number
 * @param {*} max max value of random number
 * @return {number}
 */
function getRandomNu(max = 1000) {
  return Math.floor(Math.random() * max);
}

/**
 * generates objects with random ids and
 * @param {number} nums
 * @return {*} array of objects
 */
function generateObjects(nums = 1000) {
  const arr = [];
  for (let i = 0; i < nums; i++) {
    const rnu = getRandomNu();
    const object = {
      id: rnu,
      name: 'randomName',
      address: 'address',
      organization: 'org',
      designation: 'xyz',
      dependent: 'abc',

    };
    arr.push(object);
  }

  return arr;
}
/**
 * prints array of objects
 * @param {*} arr array of objects
 */
function printArr(arr) {
  arr.forEach((e) => {
    console.log(e.id);
  });
}

module.exports = {generateObjects, printArr};
