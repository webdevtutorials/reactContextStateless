# React Context Stateless Demo
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic "Stateless" Context Provider-Consumer relationship.

---

## Start a new Vite-React project:
```bash
cd tutorials

yarn create vite reactContextStateless --template react
cd reactContextStateless
yarn install
yarn dev
```

## Initiate version control and upload to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

## Apload to GitHub:
```bash
gh auth status
gh repo create reactContextStateless --public --source=. --remote=origin --push
```

## Open in editor:
```bash
code
```

## Create static context consuming React component:
```bash
cd src
code AnyComponent.jsx
```

```js
// src / AnyComponent.jsx
import { useContext } from 'react';
import { MyContext } from './App.jsx';

function AnyComponent() {
    const data = useContext(MyContext);

    return (
        <div style={{ width:400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>Component A</h1>
            <p>This context data is {data}</p>
        </div>
    );
}

export default AnyComponent;
```

## Create context provider in App.jsx:
```js
// src / App.jsx
import { createContext } from 'react';

const MyContext = createContext(null);

<MyContext.Provider value="stateless">
    <ComponenetA />
</MyContext.Provider>

export { MyContext };
```




## Additional theory and explanation:
- MyContext is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.
    ```const MyContext = createContext(null)```

- It contains **MyContext.Provider** and **MyContext.Consumer** properties, which both point to the same object.

- Consumers get access to data once wrapped in a provider like this:
    ```<MyContext.Provider />```
and import useContext from 'react' and MyContext from the object location.

- The providers receives data ones the data is assigned to the value property
in the wrapper like this:
    ```<MyContext.Provider value={3} />```

- The wrapped consumer access the data like this:
    ```const value = useContext(MyContext)```
if it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest MyContext.Provider
If no provider is found, the default value is returned.

## Summary plan:
1. Create provider-consumer relationship:
    ```const MyContext = createContext(null)```

2. Wrap consumers in a provider:
    ```<MyContext.Provider />```

3. Supply the data via "value" property:
    ```<MyContext.Provider value="My data" />```

4. Retrieve data using useContext hook:
    ```const value = useContext(MyContext)```