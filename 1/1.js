function findSum(num, multiples) {
  const filteredNums = [];
  for (let i = 1; i < num; i++) {
    multiples.forEach((multiple) => {
      if (i % multiple === 0) filteredNums.push(i);
    });
  }
  return [...new Set(filteredNums)].reduce((prev, a) => prev + a);
}

console.log(findSum(1000, [3, 5]));
