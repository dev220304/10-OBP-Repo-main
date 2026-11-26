function MyObject2(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    this[arr1[i]] = arr2[arr2.length - 1 - i];
  }
}

let obj2 = new MyObject2(["name", "age"], [1, 2, "Devashish"]);
console.log(obj2); 