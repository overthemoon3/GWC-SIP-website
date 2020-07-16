/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/
var fullItemList = document.getElementById("my-list");
fullItemList.addEventListener("click",checkOffList); // add event listener DONE
/* TODO: Add a variable to store the "my-list" element DONE */

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffList);
}
  
  
  function checkOffList(clicked) {
 if (clicked.target.tagName == "LI") {
clicked.target.classList.toggle("all-done")
    }
}


/* TODO: Declare the function checkOffList and add actions inside the { } */


