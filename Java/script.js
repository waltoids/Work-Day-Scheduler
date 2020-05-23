$(document).ready(function (){
  const currentDay = $('#currentDay');
  const container = $('.container');
  const events = JSON.parse(localStorage.getItem("plans")) || {};

  //Set the date in body / header / p tag
  currentDay.text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a")); 

  //Need to create 9 rows, all similar in structure, for loop is a good way to accomplish this calling createRows function 9 times passing i into a variable
  for (let i = 9; i < 18; i++) {
      createRows(i, events[i]);
  }
  // create function to creates a row/input field for user/ save button to save locally
  function createRows (hour, content) {
      const rows = $(`<div class = "row">`);
      const hours = $(`<div class = "hour">${moment(hour, 'h a').format('h a')}</div>`);
      const inputField = $(`<textarea class = "description ${rowColorByHour(hour,)}" id="submit" value = "${hour}">${content || ''}</textarea>`);
      const saveBtn = $(`<button class = "saveBtn" value = "${hour}"><i class = "fas fa-save"></i></button>`);

      rows.append(hours)
      rows.append(inputField)
      rows.append(saveBtn)

      container.append(rows);
  }
  //create a function to change color of row based on current time, this needs to set class in row somehow
  function rowColorByHour(time) {
    const currentHour = moment().hour();

      if (time < currentHour) {
        return `past`
      }else if (time === currentHour) {
        return `present`
      } else if (time > currentHour) {
       return `future`
      }
  }
  //create on click event for saveBtn to save textarea to local storage
  $('.saveBtn').on("click", function(){
    const valueBtn = $(this).attr('value');
    const inputValue = $(`textarea[value="${valueBtn}"]`).val();

    Object.assign(events, { [valueBtn]: inputValue });

    localStorage.setItem("plans", JSON.stringify(events));
  });
});