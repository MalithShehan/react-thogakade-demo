export const initialState = 0;

export function countReducer(state: number, action: { type: string; payload: number }) {
    switch (action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        default:
            return state;
    }
}