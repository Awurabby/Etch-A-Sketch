const container = document.querySelector("#container");
const btn = document.querySelector("button");



for (let i = 1; i < 257; i++){
  let divs = document.createElement("div");
  divs.classList.add("aDiv");
  container.appendChild(divs);

  divs.addEventListener("mouseenter", () => {
    divs.style.backgroundColor = "red";
  })
}

btn.addEventListener("click", () => {
  let userResponse = prompt("How many squares per side?");
  while (userResponse < 1 || userResponse > 100) {
    userResponse = prompt("Invalid request! Number must be between 1 and 100");
  }
  document.querySelectorAll("#container div").forEach(div => div.remove());
  

  for (let i =1; i <(userResponse* userResponse + 1); i++){
    let newDivs = document.createElement("div");
    newDivs.classList.add("newDiv");
    newDivs.style.width = `${960/userResponse}px`;
    container.appendChild(newDivs);
    
    newDivs.addEventListener("mouseenter", ()=> {
      newDivs.style.backgroundColor = "red";
    })
  }
})
