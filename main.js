const color = [
  "#333",
  '#000',
  "#444",
  "#fff",
  "#FF0000",
  "#008000",
  "#0000FF",
  "#FFA500",
  "#FF1493",
  "#FFFF00",
  "#FF4500",
]

let cd = document.querySelector('.colorCode');//geting the h1 tag which shows the color code

let i = -1; // this is need for "cycle from fist to last of array" ***********

// this is need for "random index with out repeatation"***************
// function for making array of number 
function createArrayOfNumber(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}

/*using function for making an array of number and by  using this function
making an array and storing that into a variable*/

let numbersArray = createArrayOfNumber(0, color.length - 1);
console.log(numbersArray);

//when button is clicked run this code
document.getElementById('btn').addEventListener('click', function () {

  // ***************random index with out repeatation *************************************

  // if (numbersArray.length === 0) {

  //   console.log('done');
  //   numbersArray = createArrayOfNumber(0, color.length - 1);
  //   var i = Math.floor(Math.random() * numbersArray.length);
  //   let z = numbersArray[i]
  //   console.log(z)
  //   numbersArray.splice(i, 1)
  //   console.log(numbersArray);
  //   document.body.style.backgroundColor = color[z];
  //   cd.innerHTML = color[z];
  //   // return numbersArray; 
  // }

  // else {
  //   var i = Math.floor(Math.random() * numbersArray.length);
  //   let z = numbersArray[i]
  //   console.log(z)
  //   numbersArray.splice(i, 1)
  //   console.log(numbersArray);
  //   document.body.style.backgroundColor = color[z];
  //   cd.innerHTML = color[z];
  // }





  // ***************random number with repeatation************************************************** */


  // var i = Math.floor(Math.random() * color.length);
  // console.log(i);
  // document.body.style.backgroundColor = color[i];
  // cd.innerHTML = color[i];







  //***************cycle from fist to last of array ******************************* */

  // if (i < color.length - 1) {
  //   ++i;
  // } else i = 0;
  // console.log(i)
  // console.log(color.length)
  // document.body.style.backgroundColor = color[i];
  // cd.innerHTML = color[i];



  // *************Random Hexa color code genarate *******************************************

  let color = '#'
  color += Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = color;
  console.log(color);
  cd.innerHTML = color;

  // ***********************another method for random hax code genarate******************************

  // const hex_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  // ;
  // let color = '#';
  // for (i = 0; i < 6; i++) {
  //   const hex_index = Math.floor(Math.random() * hex_num.length)
  //   color += hex_num[hex_index];
  // }
  // document.body.style.backgroundColor = color;
  // cd.innerHTML = color;

  // console.log(color);


})

