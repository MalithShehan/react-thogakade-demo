import './App.css';
import { useReducer } from "react";
import {countReducer} from "./reducers/CountReducer.ts";


// function countReducer(state: number, action: { type: string; payload: number }) {
//     switch (action.type) {
//         case 'increment':
//             return state + action.payload;
//         case 'decrement':
//             return state - action.payload;
//         default:
//             return state;
//     }
// }

function App() {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
        </>
    );
}

export default App;