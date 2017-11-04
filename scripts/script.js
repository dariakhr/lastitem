 var arr = [5, 2, 3, 7, 9];
 alert(arr);
 var number = +prompt('Write a number');
 if (!isNaN(number) && number >= 0) {
   arr[5] = number;
 } else {
   alert('u are not right');
 }
 alert(arr);
