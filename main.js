
const fs = require("fs");

function randomString(n) {
  let result = "";
  let chars = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]; 
    console.log(n - i);
  }
  console.log(result);
  return result;
}

fs.writeFileSync("rand.txt", randomString(1000000));
