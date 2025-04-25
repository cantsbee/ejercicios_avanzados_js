function rollDice(sides) {
  
  const result = Math.floor(Math.random() * sides) + 1;
  return result;
  
}

// Ejemplos de uso:
console.log(rollDice(6)); 
console.log(rollDice(20)); 

