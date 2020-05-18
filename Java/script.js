const currentDay = $("#currentDay");
const container = $(".constainer");

//Set the date in header
currentDay.text(moment().format("dddd, MMMM Do")); 