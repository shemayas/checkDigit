const SET_DIGIT_VALUE = 'bm/checkDigit/SET_DIGIT_VALUE';

export function setInput(index, value) {
    return {
        type: SET_DIGIT_VALUE,
        payload: { index, value },
    }
}

const inputLength = 8;
const initialState = {};
[...Array(inputLength)].map((val, index) => initialState[index] = null);

export default function checkDigitReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DIGIT_VALUE:
            return {...state, [action.payload.index]: action.payload.value}
        default:
            return state
    }
}