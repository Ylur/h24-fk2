// Using var
function varExample() {
    var x = 10;
    if (true) {
      var x = 20; // Re-declares and changes x in the whole function scope
      console.log("Inside if block (var):", x); // 20
    }
    console.log("Outside if block (var):", x); // 20
  }
  
  varExample();
  
  // Using let
  function letExample() {
    let y = 10;
    if (true) {
      let y = 20; // Creates a new variable inside the block scope
      console.log("Inside if block (let):", y); // 20
    }
    console.log("Outside if block (let):", y); // 10
  }
  
  letExample();
  