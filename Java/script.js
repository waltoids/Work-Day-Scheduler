$(document).ready(function (){
  const currentDay = $("#currentDay");
  const container = $(".constainer");

  //Set the date in body / header / p tag
  currentDay.text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a")); 

  //Need to create 9 rows, all similar in structure, for loop is a good way to accomplish this
  for (let i = 0; i < 9; i++) {
      createRows(i);
  }
  // create function to creates a row/input field for user/ save button to save locally
  function createRows (num) {
      const rows = $(`<div class = "row" id = ${num}>`);
  }

});