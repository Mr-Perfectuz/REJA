// F-Task:

// findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.

function findDoublers(word) {
  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(findDoublers("helo"));
