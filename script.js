
const grid1 = document.querySelector(".grid1")
const grid2 = document.querySelector(".grid2")
const grid3 = document.querySelector(".grid3")
const grid4 = document.querySelector(".grid4")
const grid5 = document.querySelector(".grid5")

let g1hex = document.querySelector("div.grid1 > h3")
let g2hex = document.querySelector("div.grid2 > h3")
let g3hex = document.querySelector("div.grid3 > h3")
let g4hex = document.querySelector("div.grid4 > h3")
let g5hex = document.querySelector("div.grid5 > h3")

//grid 1
let r1 = Math.floor(Math.random() * 256).toString(16);
let g1 = Math.floor(Math.random() * 256).toString(16);
let b1 = Math.floor(Math.random() * 256).toString(16);

r1 = (r1.length === 2) ? r1 : '0' + r1;
g1 = (g1.length === 2) ? g1 : '0' + g1;
b1 = (b1.length === 2) ? b1 : '0' + b1;

color1 = `#${r1}${g1}${b1}`;

grid1.style.backgroundColor = color1;
g1hex.textContent = color1;

//grid 2
let r2 = Math.floor(Math.random() * 256).toString(16);
let g2 = Math.floor(Math.random() * 256).toString(16);
let b2 = Math.floor(Math.random() * 256).toString(16);

r2 = (r2.length === 2) ? r2 : '0' + r2;
g2 = (g2.length === 2) ? g2 : '0' + g2;
b2 = (b2.length === 2) ? b2 : '0' + b2;

color2 = `#${r2}${g2}${b2}`;

grid2.style.backgroundColor = color2;
g2hex.textContent = color2;

//grid 3
let r3 = Math.floor(Math.random() * 256).toString(16);
let g3 = Math.floor(Math.random() * 256).toString(16);
let b3 = Math.floor(Math.random() * 256).toString(16);

r3 = (r3.length === 2) ? r3 : '0' + r3;
g3 = (g3.length === 2) ? g3 : '0' + g3;
b3 = (b3.length === 2) ? b3 : '0' + b3;

color3 = `#${r3}${g3}${b3}`;

grid3.style.backgroundColor = color3;
g3hex.textContent = color3;

//grid 4
let r4 = Math.floor(Math.random() * 256).toString(16);
let g4 = Math.floor(Math.random() * 256).toString(16);
let b4 = Math.floor(Math.random() * 256).toString(16);

r4 = (r4.length === 2) ? r4 : '0' + r4;
g4 = (g4.length === 2) ? g4 : '0' + g4;
b4 = (b4.length === 2) ? b4 : '0' + b4;

color4 = `#${r4}${g4}${b4}`;

grid4.style.backgroundColor = color4;
g4hex.textContent = color4;

//grid 5
let r5 = Math.floor(Math.random() * 256).toString(16);
let g5 = Math.floor(Math.random() * 256).toString(16);
let b5 = Math.floor(Math.random() * 256).toString(16);

r5 = (r4.length === 2) ? r5 : '0' + r5;
g5 = (g5.length === 2) ? g5 : '0' + g5;
b5 = (b5.length === 2) ? b5 : '0' + b5;

color5 = `#${r5}${g5}${b5}`;

grid5.style.backgroundColor = color5;
g5hex.textContent = color5;
