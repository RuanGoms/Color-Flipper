//--------------------------------------- Simple Color --------------------------------------- 

  // Colors
const colorsData = ["red", "green", "purple", "rgb(123, 13, 12)", "#8FE321", "blue", "brown", "gray", "gold", "orange", "yellow", "black"];

// Get element button by id
const btnColor = document.getElementById("btn-color");

// Get the elements who have the id color
const color = document.querySelector("#color");

// add a method to the variable btnColor, who is a event that active a function when you click
btnColor.addEventListener("click", function(){
  // create a let variable called colorsSelector with a empty string
  let colorsSelector = "";
  // loop with for to add the color word for the colorsSelector from the colorsData source
  for (let color = 0; color < 1; color++){
    colorsSelector += colorsData[pickColor()]
  }

  // Change the text content of the element span
  color.textContent = colorsSelector;
  // Change the background color, the hex number color and the h4 element color.
  document.body.style.background = colorsSelector;
  document.getElementById("color").style.color = colorsSelector;
  document.getElementById("color-title").style.color = colorsSelector;
});

// Function to get a random number in the array colorsData
// Use Math.Floor to get a representing of the largest integer less than or equal to the specified number.
// Use Math.random() * colorsData.length to get a random number up to colorsData length
function pickColor() {
  let pickedColor = Math.floor(Math.random() * colorsData.length);
  return pickedColor
}

//--------------------------------------- Simple Color --------------------------------------- 