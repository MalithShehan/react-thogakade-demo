import {useReducer} from 'react'
import './App.css'
import {NameReducer} from "./reducers/NameReducer.ts";

function App() {
    const [firstName, dispatchFirstName] = useReducer(NameReducer, "Empty");
    const [lastName, dispatchLastName] = useReducer(NameReducer, "Empty");

    return (
        <>
            <input type="text" placeholder="Input First Name"
                   onChange={(e) =>
                       dispatchFirstName({type: 'UPDATE_NAME', payload: e.target.value})} />
            <input type="text" placeholder="Input Last Name"
                   onChange={(e) =>
                       dispatchLastName({type: 'UPDATE_NAME', payload: e.target.value})} />
            <br />
            {firstName} {lastName}
        </>
    )
}

export default App