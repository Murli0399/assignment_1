let string = "naman";
let str = "";
let len = string.length;
for (let i = 0; i < len; len--) {
  str += string[len-1];
}
console.log(str);
if (str == string) {
  console.log("Palindrome");
}
else {
  console.log("Not Palindrome");
}