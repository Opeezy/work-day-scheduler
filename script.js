// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  let buttons = document.getElementsByClassName("saveBtn")
  for (button of buttons) {
    button.addEventListener("click", function(e){
      let parent = this.parentElement
      let id = parent.id
      let text = parent.children[1].value
      window.localStorage.setItem(id, text)
    })
  }

  let dtime = new Date();
  let time = dtime.getHours();
  document.getElementById("currentDay").innerHTML = dtime;

  let rows = document.getElementsByClassName("row")
  for (row of rows) {
    let storedText = window.localStorage.getItem(row.id)
    row.children[1].value = storedText
    let rowTime = parseInt(row.id)
    if (rowTime === time) {
      row.setAttribute("class", "row time-block present") 
    } else if (rowTime > time) {
      row.setAttribute("class", "row time-block future")
    } else {
      row.setAttribute("class", "row time-block past")
    }
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
