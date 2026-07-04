function isMorse(str) {
  return /^[.\-/ ]+$/.test(str.trim());
}

function isEnglish(str) {
  return /^[a-zA-Z ]+$/.test(str.trim());
}

function translateToMorse(str, morse) {
  return str
    .trim()
    .toUpperCase()
    .split("")
    .map((char) => morse[char])
    .join(" ");
}

function translateToEnglish(str, morse) {
  const reverseMorse = Object.fromEntries(
    Object.entries(morse).map(([key, value]) => [value, key]),
  );

  return str
    .trim()
    .split(" ")
    .map((code) => reverseMorse[code])
    .join("");
}

export default function translate(str, morse, buttonId) {
  if (buttonId === "to-morse-btn" && isEnglish(str)) {
    return translateToMorse(str, morse);
  }

  if (buttonId === "to-english-btn" && isMorse(str)) {
    return translateToEnglish(str, morse);
  }
}
