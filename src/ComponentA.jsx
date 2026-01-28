import { useContext } from 'react';
import { MyContext } from './App.jsx';

function ComponentA() {
    const data = useContext(MyContext);
    
    return (
        <div style={{ width: 400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>Component A</h1>
            <p>This context data is {data}</p>
        </div>
    );
}

export default ComponentA;