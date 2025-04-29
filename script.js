const container = document.querySelector("#container");

for (let i = 1; i < 257; i++){
  let divs = document.createElement("div");
  divs.classList.add("aDiv");
  container.appendChild(divs);
}