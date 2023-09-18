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

function areAnagrams(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

var result1 = areAnagrams("laepp", "apple");
console.log(result1);

var result2 = areAnagrams("listen", "silent");
console.log(result2);
