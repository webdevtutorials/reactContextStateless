import { useContext } from 'react';
import { MyContext } from './App.jsx';

function AnyComponent() {
    const data = useContext(MyContext);
    
    return (
        <div style={{ width: 400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>This context data is {data}</p>
        </div>
    );
}

export default AnyComponent;