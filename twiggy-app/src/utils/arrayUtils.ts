export function rotateArray<T>(array: Array<T>, stepsToRotate: number): Array<T> {
  // Handle cases where steps is larger than the array length or negative
  stepsToRotate = ((stepsToRotate % array.length) + array.length) % array.length;

  return array.slice(stepsToRotate).concat(array.slice(0, stepsToRotate));
}
