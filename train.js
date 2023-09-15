// B-Task:

// Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.

// Masalan: getDigits("ag1aw5g6") return qilsin 3

function getDigits(text) {
  let countNumbers = text.replace(/\D/g, "").length;
  // let countNumber2 = text.match(/\d/g).length;
  console.log(`'${text}' da ${countNumbers} ta son bor`);
  // console.log(`'${text}' da ${countNumber2} ta son bor`);
}

getDigits("ag1aw5g6");
