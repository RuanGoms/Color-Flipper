//--------------------------------------- Hex --------------------------------------- 
    // Numbers and letters who contruct the hexdecimal color
    const hexData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // Get element button by id
    const btnColor = document.getElementById("btn-color");
    // Get the elements who have the id color
    const color = document.querySelector("#color");
    
    // add a method to the variable btnColor, who is a event that active a function when you click
    btnColor.addEventListener("click", function(){
      // create a let function called hexDecimal and add a value "#" for begin a hex number
      let hexDecimal = "#";
      // loop with for to add numbers and letters for the hexDecimal from the hexData source
      for (let i = 0; i < 6; i++) {
        hexDecimal += hexData[getRandomNumber()];
      }
      //Verify if its working:
      // console.log(hexDecimal);
    
      // Change the text content of the element span
      color.textContent = hexDecimal;
      // Change the background color, the hex number color and the h4 element color to the hex decimal created
      document.body.style.background = hexDecimal;
      document.getElementById("color").style.color = hexDecimal;
      document.getElementById("color-title").style.color = hexDecimal;
    });
    
    // Function to get a random number in the array hexData
    // Use Math.Floor to get a representing of the largest integer less than or equal to the specified number.
    // Use Math.random() * hexData.length to get a random number up to hexDATA length
    function getRandomNumber() {
      let char = Math.floor(Math.random() * hexData.length);
      return char
    }
    
    //--------------------------------------- Hex --------------------------------------- 