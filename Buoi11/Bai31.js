const sumCombination = (array) => {
  return array.reduce((sum, el) => (sum += el), 0);
};

const k_combinations = (set, k) => {
  var i, j, combs, head, tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
};
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let coms = k_combinations(array, 3);
const findSumCombinations = (combinations, sum) => {
  return combinations.find((el) => sumCombination(el) == sum);
};

console.log(findSumCombinations(coms, 26));
console.log(findSumCombinations(coms, 30));
