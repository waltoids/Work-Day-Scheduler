$(document).ready(function (){
  const currentDay = $('#currentDay');
  const container = $('.container');

  //Set the date in body / header / p tag
  currentDay.text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a")); 

  //Need to create 9 rows, all similar in structure, for loop is a good way to accomplish this
  for (let i = 0; i < 9; i++) {
      createRows(i);
  }
  // create function to creates a row/input field for user/ save button to save locally
  function createRows (num) {
      const rows = $(`<div class = "row" id = ${num}>`)
      const hours = $(`<div class = "hour">`);
      const inputField = $(`<textarea class = "description" id="submit"></textarea>`);
      const saveBtn = $(`<button class = "saveBtn "><i class = "fas fa-save"></button>`);

      rows.append(hours)
      rows.append(inputField)
      rows.append(saveBtn)

      container.append(rows);
  }
  //create a function to change color of row based on current time, this needs to set class in row somehow
  function rowColorByHour(time) {
    const currentHour = moment().hour;

      if (time < currentHour) {
        return past
      }else if (time === currentHour) {
        return present
      } else if (time > currentHour) {
       return future
      }
  }
  //create on click event for saveBtn to save to local storage
});