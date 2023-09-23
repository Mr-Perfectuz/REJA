// B-Task:

// Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.

// Masalan: getDigits("ag1aw5g6") return qilsin 3

function getDigits(text) {
  let countNumbers = text.replace(/\D/g, "").length;
  let countNumber2 = text.match(/\d/g).length;
  console.log(`'${text}' da ${countNumbers} ta son bor`);
  console.log(`'${text}' da ${countNumber2} ta son bor`);
}

// getDigits("ag1aw5g6");

// C-Task

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// MASALAN checkSimilarity("laepp", "apple") true return qiladi.

function checkSimilarity(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

var result1 = checkSimilarity("laepp", "apple");
// console.log(result1);

var result2 = checkSimilarity("listen", "silent");
// console.log(result2);

// D-Task:

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");
const time = moment().format("LLL");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `Sizda ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola qoldi`
    );
  }
  sotish(non, lagmon, cola) {
    this.non -= non;
    this.lagmon -= lagmon;
    this.cola -= cola;
    console.log(
      `Sizda ${time} da  ${non} ta non, ${lagmon} ta lagmon va ${cola} ta cola sotdingiz`
    );
  }
  qabul(non, lagmon, cola) {
    this.non += non;
    this.lagmon += lagmon;
    this.cola += cola;
    console.log(
      `Sizda ${time} da  ${non} ta non, ${lagmon} ta lagmon va ${cola} ta cola qabul qilib oldingiz`
    );
  }
}

const shop1 = new Shop(4, 5, 2);
// shop1.qoldiq();
// shop1.qabul(1, 3, 4);
// shop1.sotish(3, 3, 2);
// shop1.qoldiq();

// console.log("------------");

// Bu comment
// Bu comment 2

// console.log("Jack Ma maslahatlari");

const list = [
  "Yaxshi talaba bo'ling", //0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
  "O'z ustingizda ishlashni boshlang", //30-40
  "Siz kuchli bo'lgan narsalarni qiling ", //40-50
  "Yoshlarga investetsiya qiling", //50-60
  "Endi dam oling foydasi yo'q", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a >= 20 && a < 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 500);
  }
}
console.log("Passed herre 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("error: ", err);
  console.log("result: ", data);
});

console.log("Passed here 1");
