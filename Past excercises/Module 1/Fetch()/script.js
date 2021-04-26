// console.log("About to fetch a rainbow :3");

// catchRainbow()
// .then(response => console.log("YAY!!"))
// .catch(err => {
//   console.error(err);
// });

// async function catchRainbow(){
//   const response = await fetch('./img/3.jpg')
//   const blob = await response.blob();
//   document.getElementById("rainbow").src = URL.createObjectURL(blob);
// }


// Lo mismo que lo de arriba


// fetch('https://media-cdn.tripadvisor.com/media/photo-s/17/f9/a4/cb/rainbow-sculpture.jpg')
//   .then(response => {
//     // console.log(response);
//     return response.blob();
//   })
//   .then(blob => {
//     document.getElementById("rainbow").src = URL.createObjectURL(blob);
//   })
//   .catch(err => console.error(err));

// getText().then(poem => {
//   document.querySelector("p").innerHTML = poem;
// }).catch(err => console.error(err));

// async function getText(){
//   const response = await fetch('text.txt');
//   return response.text();
// }


// Ejercicio de imagenes

// let array = ["./img/1.jpg","./img/2.jpg","./img/3.jpg"];

// for(let i = 0; i < 3; i++){
//   getImages(array[i],i).then(() => console.log(`La imágen ${i+1} con dirección ${array[i]} ha sido insertada satisfactoriamente.`)).catch(err => console.error(err));
// }

// async function getImages(position,i){
//   const response = await fetch(position);
//   const blob = await response.blob();
//   document.getElementById(`${i + 1}`).src = URL.createObjectURL(blob);
// }

getCSV()
  .then(returngetCSV => {
    // const create = document.createElement("p");
    // create.innerHTML = returngetCSV;
    
    // b.split('\n').slice(1);
    // console.log(b);
    // document.body.append(create);
    let data = returngetCSV;
    let row = data.split(/\n/).slice(1);
    row.forEach(element => {
      let row = element.split(',');
      // console.log(row);
      let year = row[0];
      xLabels.push(year);
      let temp = row[1];
      console.log(year,temp);
      
    });
    // console.log(row);
});

// async function getCSV(){
//   const response = await fetch("./CSV/ZonAnn.Ts+dSST.csv");
//   return response.text();
// }

