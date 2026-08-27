export function validateANumber(arrayNumbers : number [], currentNumber : number) : boolean {
    let numbersFound : number = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        if(arrayNumbers[i] === currentNumber){
            numbersFound++;
        }
    }

    if(numbersFound >= 1) return false;

    return true;
}