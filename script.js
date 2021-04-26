import express from "express";
const express = require('express');
const app = express();

app.listen(3000, () => console.log("started"))
console.log("Yey");

if('geolocation' in navigator){
  console.log("Available");
  navigator.geolocation.getCurrentPosition(position => {
    function getGeo(){
      document.getElementById("lat").innerHTML = position.coords.latitude;
      document.getElementById("lon").innerHTML = position.coords.longitude;
      // console.log(position.coords.latitude);
      // console.log(position.coords.latitude);
    }
    getGeo();
  });
} else {
  console.log("Not available");
}