$(function () {
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
});
