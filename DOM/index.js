const ul1 = document.querySelectorAll(".ul1>li");
const ul2 = document.querySelectorAll(".ul2>li");
const ul0 = document.getElementById("ul3");
let count = 0;
let arrX = [];
for (let x of ul1) {
  const li = document.createElement("li");
  li.innerText = x.textContent;
  arrX[count] = x.textContent;
  ul0.appendChild(li);
  count++;
}
for (let y of ul2) {
  let a = arrX.indexOf(y.textContent);
  if (a == -1) {
    const li = document.createElement("li");
    li.innerText = y.textContent;
    ul0.appendChild(li);
  }
}
