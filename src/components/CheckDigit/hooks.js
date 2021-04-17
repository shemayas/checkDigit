import {useSelector} from 'react-redux';

export function useCheckDigitResult() {
    const stateInputs = useSelector((state) => state.checkDigit)

    const id = Object.values(stateInputs).reduce((result, currValue) => {
        const appendVal = isNaN(currValue) || currValue === null ? 0 : currValue;
        result.push(appendVal);
        return result;
    }, []);

    const sums = id.map((num, index) => {
        let multiplier = 2;
        if ((index % 2) === 0) {
            multiplier = 1;
        }

        return num * multiplier;
    });

    const finalSum = sums.reduce((result, currVal) => {
        return result + (currVal > 9 ? currVal - 9 : currVal);
    }, 0)

    return ((10 - (finalSum % 10)) % 10);
}