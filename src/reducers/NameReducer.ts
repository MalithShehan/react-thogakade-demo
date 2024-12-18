export const initialState = "Empty";

export function NameReducer(state = initialState, action: { type: string, payload: string }) {
    switch (action.type) {
        case 'UPDATE_NAME':
            return action.payload;
        default:
            return state;
    }
}