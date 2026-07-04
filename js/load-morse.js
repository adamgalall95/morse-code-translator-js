export default async function loadMorseCode(path) {
  const response = await fetch(path);
  const morse = await response.json();
  return morse;
}
