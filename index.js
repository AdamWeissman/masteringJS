alert("YO")
userName = prompt("What's your name?")
alert((userName == "Adam") ? `Nice to meet you ${userName}` : `Never heard of you ${userName}`)


let switchTest = prompt("What are three things you want to master in the next month?")

switch(switchTest) {
  case "JavaScript for Coding Interviews":
  console.log("JavaScript for Coding Interviews");
  case "JavaScript for the DOM":
  console.log("JavaScript for the DOM", "also if no break on the above case \n then it runs this... \n if no break on this, it'll run cases until it finds one")
  break;
  case "JaveScript for Node.js and Express":
  console.log("JaveScript for Node.js and Express")
  break;
}

function message() {
  alert("surprise")
}


/*

  useful js to be aware of: 
  prompt
  typeOf

*/