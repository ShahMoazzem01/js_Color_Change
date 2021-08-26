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

let cd = document.querySelector('.cd');

let i = -1;

document.getElementById('btn').addEventListener('click', function () {

  // ***************random index*************************************
  // var i = Math.floor(Math.random()*color.length);
  // console.log(i);
  // document.body.style.backgroundColor = color[i];
  // cd.innerHTML = color[i];

  //***************cycle from fist to last of array ******************************* */

  //  if ( i < color.length-1 ){
  //    ++i;
  //  } else i=0;
  //  console.log(i)
  //  console.log(color.length)
  // document.body.style.backgroundColor = color[i];
  // cd.innerHTML = color[i];



  // *************Random Hexa color code genarate *******************************************

  // let color = '#'
  // color += Math.random().toString(16).slice(2,8);
  // document.body.style.backgroundColor = color;
  // console.log(color);
  // cd.innerHTML = color;

  // ***********************another method for random haxa code genarate******************************

  const hex_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  ;
  let color = '#';
  for (i = 0; i < 6; i++) {
    const hex_index = Math.floor(Math.random() * hex_num.length)
    color += hex_num[hex_index];
  }
  document.body.style.backgroundColor = color;
  cd.innerHTML = color;

  console.log(color);


})

