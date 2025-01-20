function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Check if x is a string or array
  } else {
    return -1; // Or throw an error: throw new Error('Invalid input type');
  }
}