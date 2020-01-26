//zadanie 0

function checkArray(arr) {
    return arr.map((el) => {
      if (el.length == 0) return false;
      let isEven = true;
      el.forEach(element => {
        if (element % 2 || el.length == 0) isEven = false;
      });
      return isEven;
    });
  }
  
  //zadanie 1
  var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
  ];
  console.log(task1Array[3, 2]);
  console.log(task1Array[1].length);
  console.log(task1Array[4, 2]);
  
  //zadanie 2
  var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ];
  
  //zadanie 2 - A
  console.log(task2Array);
  //Zadanie 2 - B
  task2Array.forEach(el => console.log(el.length));
  //Zadanie 2 - C
  for (const i of task2Array) {
    for (const j of i) console.log(j);
  }
  
  //zadanie  3
  function print2DArray(arr) {
    arr.forEach((subArr) => {
      subArr.forEach(el => {
        console.log(el);
      });
    })
  }
  
  //zadanie  4
  const myArray = [[0, 1],[2, 3],[4, 5]]
  print2DArray(myArray);
  
  //zadanie 5
  function create2DArray(rows, columns) {
    const result = [];
    let val = 0;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++)row.push(val++);
      result.push(row);
    }
    return result;
  }