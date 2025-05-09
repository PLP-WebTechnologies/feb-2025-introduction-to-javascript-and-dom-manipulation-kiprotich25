function changeText() {
    document.getElementById("text").textContent = "Assignment instruction: Write basic JavaScript functions. Manipulate the DOM dynamically. Respond to user interactions.";

  }
  
  function changeStyle() {
    document.getElementById("navig").style.color = "green";
    document.getElementById("navig").style.fontSize = "2.5rem";
    document.getElementById("main-body").style.backgroundColor = "white";
    document.getElementById("text").style.color = "red";
  }
  
  function toggleElement() {
    const container = document.getElementById("extra-element");
    if (container.innerHTML === "") {
      container.innerHTML = "<p>Happy Coding! 💻✨</p>";
    } else {
      container.innerHTML = "";
    }
  }
  
  const button = document.getElementById("btn");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.textContent = "Introduction to Javascript and DOM .";
  });
  const list = document.getElementById("list");
  const addButton =document.getElementById("add");

  addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Change text content dynamically."
    list.appendChild(newItem);
  });
  