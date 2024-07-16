import React, { createContext } from 'react';

// 4 - Component import
import FirstComponent from './components/FirstComponent';

// 5 - Destruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 11 - Using context
import Context from './components/Context';

// 9 - Type
type textOrNull = string | null
type fixed = "This" | "Or" | "That"

// 10 - context
interface IAppContext {
  language:string,
  framework:string,
  projects:number
}

export const AppContext = createContext<IAppContext | null>(null)


function App() {

  // 1 - Variables
  const name:string = "Nicolas"
  const age:number = 19
  const isWorking:boolean = true

  // 2 - functions
  const userGreeting = (name:string):string => {
    return `Hello ${name}!`
  }
  
  // 9 - Type
  const myText:textOrNull = "Some text"
  let mySecondText:textOrNull = null

  // mySecondText = "Hello"
  // mySecondText = 15

  // const textingFixed:fixed = "Hello"
  const textingFixed:fixed = "This"

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }


  return (
    <AppContext.Provider value = {contextValue}>
    <div className="App">
      <h1>React with TypeScript</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      {isWorking && (
        <h2>Is working!</h2>
      )}
      <h2>{userGreeting(name)}</h2>
      <FirstComponent />
      <SecondComponent name="Jorge Prego"/>
      <Destructuring 
        title="First post" 
        content="Some content" 
        commentsQty={10}
        tags={["TypeScript"]}
        category={Category.TS}
      />
      <State/>
      {myText && <p>There is text in the variable</p>}
      {mySecondText && <p>There is text in the variable</p>}

      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
