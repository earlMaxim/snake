let arr =[];
// let x=5, y=5;
let x1 = 1, y1=1;
let value = 1;
columns = prompt("Количество столбиков");
rows = prompt("Количетво строк");

// x = document.getElementById("x");
// x = x.value;
// console.log(x)

function makeMatrix(rows,columns){
    var value=1;
    var arr = new Array();
    for(var i=0; i<rows; i++){
      arr[i] = new Array();
      for(var j=0; j<columns; j++){
        arr[i][j] = -1;
      }
    }
    return arr;
  }



let myMatrix = makeMatrix(rows,columns);
console.log(myMatrix)


//внещний периметр
function makePerimetr(myMatrix, rows, columns, value){
for(let i=0; i< rows -1; i++){
  myMatrix[0][i] = value
  value++
}
for(let i=0; i<columns-1;i++){
  myMatrix[i][rows-1] = value
  value++
}
for(let i=rows-1; i>-1;i--){
  myMatrix[columns-1][i]=value;
  value++
}
for(let i=columns-1; i>1;i--){
  myMatrix[i-1][0]=value;
  value++;
}
return value;
}

value = makePerimetr(myMatrix, rows, columns,value);

console.log(myMatrix)
console.log(value)


console.log(myMatrix)


  //go right 
  while(myMatrix[x1][y1] == -1){
    myMatrix[x1][y1]=value;
    value++
    y1++
    // y1 = 4
  }
  //go down

  x1=x1+1;
  while(myMatrix[x1][y1-1] == -1)
  {
    myMatrix[x1][y1-1] = value;
    value++;
    x1++;
  }

  x1=x1-1;
  y1=y1-1-1;
  console.log("Y1= " + y1 +"X1= "+ x1)
  //go left
  while(myMatrix[x1][y1] == -1){
    myMatrix[x1][y1]=value;
    value++;
    console.log("Y1= " + y1 +"X1= "+ x1)
    y1--;
  }
  x1=rows-x1-1;
  console.log("Y1= " + y1 +"X1= "+ x1)
  //go up
  while(myMatrix[x1][y1] == -1){
    myMatrix[x1][y1]=value;
    x1--
    value++
  }



// //console.log("Y1= " + y1 +"X1= "+ x1)
// console.log("Y1= " + y1 +"X1= "+ x1)
console.log(myMatrix)
// // // //go right
// // while(myMatrix[x1][y1] == -1){
// //     myMatrix[x1][y1]=value;
// //     value++;
// //     y1++
// // }
// // y1--;
// // console.log(x1, y1)
// // //go down

// // while(myMatrix[x1+1][y1] == -1){
// //   myMatrix[x1][y1]=value;
// //   value++;
// //   x1++
// // }

// console.log(myMatrix)



// function goRight( myMatrix, rows, columns){}


// function goDown(){

// }

// function goLeft(){

// }

// function goUp(){

// }

// console.log(arr)

// Массивы сумм
// let arr = [1 , 2, 3, 4, 5];
// let arr_lenght = arr.length;
// console.log(arr_lenght);
// if(arr_lenght>1){
//     for(let i=1; i<arr_lenght; i++){
//         arr[i]=arr[i-1]+arr[i];
//     }
//     console.log(arr);
// }
// else{
//     console.log(arr)
// }


// let arr = ['aaa', 'bbb', 'ccc', 'dddd', 'aaa', 'aaaa', 'ddddd', 'bbb'];
// let arr_l = arr.length;
// let new_arr= arr;
// for(let i=0; i<arr_l; i++){
//     for(let j=i+1; j<arr_l;j++){
//         if(arr[i]==arr[j]){
//           delete new_arr[j];
//         }
//     }
// }
// console.log(new_arr);



// let arr = ['aaa', 'bbb', 'ccc', 'dddd', 'aaa', 'aaaa', 'ddddd', 'bbb'];
// let arr_l = arr.length;
// for(let i=0; i<arr_l; i++){
//     if(arr[i].length<4){
//         delete arr[i]
//     }
// }
// console.log(arr);




// let arr = [1 , 2, 3, 4, 5], arr1=[2,3,4];
// let new_arr=[];
// let l_arr= arr.length, l_arr1=arr1.length;
// if(l_arr>=l_arr1){
//     for(let i=0;i<l_arr1; i++){
//         new_arr[i]=arr[i]+arr1[i];
//     }
//     new_arr=new_arr.concat(arr.slice(l_arr1,l_arr))
// }
// else{
//     for(let i=0;i<l_arr; i++){
//         new_arr[i]=arr[i]+arr1[i];
//     }
//     new_arr=new_arr.concat(arr.slice(l_arr,l_arr1))
// }