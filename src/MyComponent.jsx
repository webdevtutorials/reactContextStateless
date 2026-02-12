import { useContext } from 'react'
import { MyContext } from './App'

export default function MyComponent() {

    return (
        <>
            <h2>Component</h2>
            <p>{useContext(MyContext)}</p>
        </>
    )
}