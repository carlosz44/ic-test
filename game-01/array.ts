class NumbersArray {
  numbersArray: number[];
  pairSum: number;

  getFirstPair(numbersArray: number[], pairSum: number): [number, number] {
    // Hashing
    const hash = [];
    const matchingPair = [];

    for (let i = 0; i < numbersArray.length; i++) {
      if (hash[numbersArray[i]] != null) {
        const index = hash[numbersArray[i]];
        matchingPair[0] = index;
        matchingPair[1] = i;
        break;
      } else {
        hash[pairSum - numbersArray[i]] = i;
      }
    }
    return [matchingPair[0], matchingPair[1]];
  }
}
