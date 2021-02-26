export class NumbersArray {
  getFirstPair(numbersArray: number[], pairSum: number): [number, number] {
    const hash: (number | undefined)[] = [];
    let matchingPair: [number, number];

    for (let i = 0; i < numbersArray.length; i++) {
      if (hash[numbersArray[i]] != null) {
        matchingPair = [hash[numbersArray[i]], numbersArray[i]];
        break;
      } else {
        hash[pairSum - numbersArray[i]] = numbersArray[i];
      }
    }
    return matchingPair;
  }
}
