export class NumbersArray {
  numbersArray: number[];
  pairSum: number;

  getFirstPair(numbersArray: number[], pairSum: number): [number, number] {
    const hash = [];
    const matchingPair = [];

    for (let i = 0; i < numbersArray.length; i++) {
      if (hash[numbersArray[i]] != null) {
        matchingPair[0] = hash[numbersArray[i]];
        matchingPair[1] = numbersArray[i];
        break;
      } else {
        hash[pairSum - numbersArray[i]] = numbersArray[i];
      }
    }
    return [matchingPair[0], matchingPair[1]];
  }
}
