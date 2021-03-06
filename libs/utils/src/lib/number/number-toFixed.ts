// Truncate a number to a given number of decimal places without rounding
//
//
// // Examples
// toFixed(25.198726354, 1);       // 25.1
// toFixed(25.198726354, 2);       // 25.19
// toFixed(25.198726354, 3);       // 25.198
// toFixed(25.198726354, 4);       // 25.1987
// toFixed(25.198726354, 5);       // 25.19872
// toFixed(25.198726354, 6);       // 25.198726
//
export default function toFixed(n, fixed) {
  return `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];
}
