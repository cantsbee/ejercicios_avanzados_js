function swap(array, index1, index2) {

  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Intercambia "La antorcha humana" con "La mujer invisible"
console.log(swap(fantasticFour, 0, 2)); 
