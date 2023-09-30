// E-Task:

// Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin

// masalan: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
  let result = str.split("").reverse().join("");
  console.log(result);
}
getReverse("hello");
