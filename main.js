
const fs = require("fs");

function randomString(n) {
  let result = "";
  let chars = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]; 
    console.log(n - i);
  }
  return result;
}

for (let i = 0; i < 10; i++) {
  let str = randomString(1000000);
  fs.appendFileSync("rand.txt", str);
}
