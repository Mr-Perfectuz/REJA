const alphabet = "abcdefghijklmnopqrstuvwxyz";
let code = 5;

function decodeMessage(message, secret) {
  let decodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char === " ") {
      decodedMessage += " ";
    } else {
      const charIndex = alphabet.indexOf(char.toLowerCase());

      if (charIndex !== -1) {
        const newIndex =
          (charIndex + secret + alphabet.length) % alphabet.length;

        const decodedChar = alphabet[newIndex];

        if (char === char.toUpperCase()) {
          decodedMessage += decodedChar.toLowerCase();
        } else {
          decodedMessage += decodedChar;
        }
      } else {
        // if char is a symbol
        decodedMessage += char;
      }
    }
  }

  return decodedMessage;
}

const message = "yes, hello, how are you doing, my general?";
const secret_msg = decodeMessage(message, code);
console.log("Decoded Message => ", secret_msg);

// Reverse the code
setTimeout(() => {
  code *= -1;
  const original_message = decodeMessage(secret_msg, code);
  console.log("Original Message => ", original_message);
}, 5000);
