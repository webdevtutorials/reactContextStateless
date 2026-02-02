# React Context for Stateless dataExample.
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic "Stateless" Context Provider-Consumer relationship.

---

## To run the app:
```bash
cd reactContextStateless
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:
```bash
cd tutorials

yarn create vite reactContextStateless --template react
cd reactContextStateless
```

## Initiate version control:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

## Upload to GitHub:
```bash
gh auth status
gh repo create reactContextStateless --public --source=. --remote=origin --push
```

## Open in editor (optional):
```bash
code
```

## Create static context consuming React component:
```bash
cd src
code ComponentExample.jsx
```

```js
// src / ComponentExample.jsx

import { useContext } from 'react';
import { ContextExample } from './App.jsx';

function ComponentExample() {
    const dataExample = useContext(ContextExample);

    return (
        <div style={{ width:400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p>{ dataExample }</p>
        </div>
    );
}

export default ComponentExample;
```

## Create context provider in App.jsx:
```js
// src / App.jsx

import { createContext } from 'react';

const ContextExample = createContext(null);

<ContextExample.Provider value="stateless">
    <AnyComponenet />
</ContextExample.Provider>

export { ContextExample };
```




## Additional explanation:
- ContextExample is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.
    ```const ContextExample = createContext(null)```

- It contains **ContextExample.Provider** and **ContextExample.Consumer** properties, which both point to the same object.

- Consumers get access to dataExample once wrapped in a provider like this:
    ```<ContextExample.Provider />```
and import useContext from 'react' and ContextExample from the object location.

- The providers receives dataExample ones the it is passed to the value property
in the provider like this:
    ```<ContextExample.Provider value={3} />```

- The wrapped consumer access the dataExample like this:
    ```const value = useContext(ContextExample)```
when it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest ContextExample.Provider
If no provider is found, the default value is returned.

## Quick-start step guide:
1. Create provider-consumer relationship:
    ```const ContextExample = createContext(null)```

2. Wrap consumers in a provider:
    ```<ContextExample.Provider />```

3. Pass the dataExample to the "value" property:
    ```<ContextExample.Provider value="My dataExample" />```

4. Retrieve dataExample with useContext hook:
    ```const value = useContext(ContextExample)```