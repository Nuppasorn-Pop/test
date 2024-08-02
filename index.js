// A
function max(array) {
  let maxNum = -Infinity;
  for (let num of array) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return `max(${array}) expected return ${maxNum}`;
}

// A - Bonus
function secondMax(array) {
  let maxNum = -Infinity;
  let newArray = [];
  for (let num of array) {
    if (num > maxNum) {
      maxNum = num;
      newArray.unshift(maxNum);
    }
    if (num < maxNum) {
      newArray.push(num);
    }
  }

  return `max(${array}) expected return ${newArray[1]}`;
}

// B
function sum(array, k) {
  let sum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += array[i];
  }

  sum = currentSum;

  for (let i = k; i < array.length; i++) {
    currentSum += array[i] - array[i - k];
    sum = Math.max(sum, currentSum);
  }

  return `fn(${array}, ${k})  expected return ${sum}`;
}
