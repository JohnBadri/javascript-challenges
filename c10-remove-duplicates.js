function removeDupilcates(arr) {
  return arr.sort().filter((value, index, self) => {
    return value !== self[index + 1];
  });
}
console.log(removeDupilcates([1, 1, 1, 1, 2, 'hello']));
