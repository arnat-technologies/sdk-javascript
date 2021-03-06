// Convert an array of objects to a single object
//
// // Example
// toObject(
//     [
//         { id: '1', name: 'Alpha', gender: 'Male' },
//         { id: '2', name: 'Bravo', gender: 'Male' },
//         { id: '3', name: 'Charlie', gender: 'Female' },
//     ],
//     'id'
// );
// /*
// {
//     '1': { id: '1', name: 'Alpha', gender: 'Male' },
//     '2': { id: '2', name: 'Bravo', gender: 'Male' },
//     '3': { id: '3', name: 'Charlie', gender: 'Female' },
// }
// */
export default function toObject(arr, key) {
  return arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
}
