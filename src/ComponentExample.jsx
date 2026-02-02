import { useContext } from 'react';
import { ContextExample } from './App.jsx';

function ComponentExample() {
    const dataExample = useContext(ContextExample);
    
    return (
        <div style={{ width: 400, height: 250, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ dataExample }</p>
        </div>
    );
}

export default ComponentExample;