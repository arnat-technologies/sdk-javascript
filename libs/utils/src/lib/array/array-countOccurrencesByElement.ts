// Count the occurrences of array elements
//
//
//  // Examples
//  countOccurrences([2, 1, 3, 3, 2, 3]);               // { '1': 1, '2': 2, '3': 3 }
//  countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']);   // { 'a': 3, 'b': 2, 'c': 1 }
//
export default function countOccurrencesByElement(arr) {
  return arr.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
}
