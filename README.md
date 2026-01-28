# React Context Stateless Demo

A quick-start guide to scaffolding a React-Vite project and implementing a basic "Stateless" Context Provider-Consumer relationship.

---

## 🚀 Quick Start
If you have already cloned the repository:

```bash
yarn install
yarn dev
```

```bash
cd tutorials

yarn create vite reactContextStateless --template react
cd reactContextStateless
yarn install

git init
git add .
git commit -m "Initial commit"
git branch -m master main

gh auth status
gh repo create reactContextStateless --public --source=. --remote=origin --push

code
```

```bash
cd src
code ComponentA.jsx
```

```js
// src / ComponentA.jsx
import { useContext } from 'react';
import { MyContext } from './App.jsx';

function ComponentA() {
    const data = useContext(MyContext);

    return (
        <div style={{ width:400, height: 200, backgroundColor: 'skyblue' }}>
            <h1>Component A</h1>
            <p>This context data is {data}</p>
        </div>
    );
}

export default ComponentA;
```



```js
// src / App.jsx
import { createContext } from 'react';

const MyContext = createContext(null);

<MyContext.Provider value="stateless">
    <ComponenetA />
</MyContext.Provider>

export { MyContext };
```

MyContext is a single returned OBJECT. It is created as following:
```const MyContext = createContext(null)```
Creating and storing it in a variable is what makes it a STABLE REFERENCE,
as opposed to a function that creates a new reference every time it's called.
It is an IDENTIFIER because it's a named variable that refers to one specific object instance.
It contains MyContext.Provider and MyContext.Consumer properties, which both point to it.
Consumers get access to data once wrapped in a provider like this:
<MyContext.Provider /> and import useContext from 'react' and MyContext from the object location.
The providers receives data ones the data is assigned to the value property
in the wrapper like this: <MyContext.Provider value={3} />
The wrapped consumer access the data like this:
const value = useContext(MyContext) if it or any of it's parents wrapped in a provider.
To be retrived, the value must be located in the nearest MyContext.Provider
If no provider is found, the default value is returned

Context for stateless data:
1. Create provider-consumer relationship: ```const MyContext = createContext(null)```
2. Wrap consumers in a provider: ```<MyContext.Provider />```
3. Supply the data via "value" property: ```<MyContext.Provider value="My data" />```
4. Retrieve data using useContext hook: ```const value = useContext(MyContext)```