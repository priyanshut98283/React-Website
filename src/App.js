// import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import ExternalStyle from './components/ExternalStyle';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import Fragmentdemo from './components/Fragmentdemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentInputRef from './components/ParentInputRef';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import HeroErrorBoundary, { ErrorFixing } from './components/HeroErrorBoundary';
import ClickCounter from './components/ClickCounter';
import ClickRenderProp from './components/ClickRenderProp';
import ClickCounter2 from './components/ClickCounter2';
import ComponentLevelA from './components/ComponentLevelA';
import { UserProvider } from './components/userContext';
import HttpGetRequest from './components/HttpGetRequest';
import HttpPostRequest from './components/HttpPostRequest';
import Hook1Counter from './components/Hook1Counter';
import HookUseEffect from './components/HookUseEffect';
// import MouseMove from './components/MouseMove';
import MouseContainer from './components/MouseContainer';
import HookIntervalCounter from './components/HookIntervalCounter';
import DataFetching from './components/DataFetching';
import ComponentD from './components/ComponentD';
import React,{ useReducer} from 'react';
import CounterOne from './Hooks/CounterOne';
import CounterTwo from './Hooks/CounterTwo';
import CounterThree from './Hooks/CounterThree';
import ComponentA from './Hooks/ComponentA';
import ComponentB from './Hooks/ComponentB';
import ComponentC from './Hooks/ComponentC';
import DataFetchingOne from './Hooks/DataFetchingOne';
import DataFetchingTwo from './Hooks/DataFetchingTwo';
import ParentComponentTwo from './Hooks/ParentComponentTwo';
import CounterMemo from './Hooks/CounterMemo';
import FocusInput from './Hooks/FocusInput';
import ClassTimer from './Hooks/ClassTimer';
import HookTimer from './Hooks/HookTimer';
import CustomHook from './Hooks/CustomHook';
import CustomCounter from './Hooks/CustomCounter';



export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

export const CountContext=React.createContext()

const initialState = 0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:return state
    }
}


function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <p>Hello World!</p>
          {
          // <Greet name="Priyanshu Sir😀"/>
          // <Greet name="P.T.😁">
          //   Content Inside.Read it.............
          // </Greet>
          }
        </h1>
      <div>
        <h1 className='error'>error</h1>
        <h1 className={styles.success}>success</h1>
      </div>
          <Welcome name="India"/>
          <Greet/>
          <FunctionClick/>
          <EventBinding/>
          <ParentComponent/>
          <UserGreeting/>
          <NameList/>
          <Stylesheet primary={true}/>
          <Inline/>
          <ExternalStyle/>
          <Forms/>
          <LifecycleA/>
          <Fragmentdemo/>
          <ParentComp/>
          <RefsDemo/>
          <ParentInputRef/>
          <FRParentInput/>
          <PortalDemo/>

          <ErrorFixing>
          <HeroErrorBoundary heroName='Batman'/>
          </ErrorFixing>

          <ErrorFixing>
          <HeroErrorBoundary heroName='Superman'/>
          </ErrorFixing>

          <ErrorFixing>
          <HeroErrorBoundary heroName='Joker'/>
          </ErrorFixing>

          {/*This ClickCounter Component is example of Higher Order Components->Reusing Code... */}
          <ClickCounter/>
          {/* Sharing Code using Render Prop Method Instead of Higher Order Components... */}
          {/* <ClickRenderProp render={(isLoggedIn)=>isLoggedIn?'P.T. ClickRenderProp':'Guest'}/> */}
           <ClickRenderProp render={(count,incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}/>}/>
           {/*<ClickRenderProp {(count,incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}/>}/>
 */} 
 {/* We can also pass like upper line but then we have to add this.props.children instead of this.props.render in ClickRenderProp.js file... */}
          
          <UserProvider value='Vishwas'>
          <ComponentLevelA/>
          </UserProvider>

          <HttpGetRequest/>
          <HttpPostRequest/>

          <Hook1Counter/>
          <HookUseEffect/>
          {/* <MouseMove/> */}
          <MouseContainer/>
          <HookIntervalCounter/>

          {/* Data Fetching using hooks........ */}
          <DataFetching/>

          {/* Below is useContext Hooks example instead of class context */}
          <UserContext.Provider value={'Vishwas'}>
          <ChannelContext.Provider value={'Codevolution'}>
          <ComponentD/>
          </ChannelContext.Provider>
          </UserContext.Provider>

          {/* Hooks folder Files now... */}

          <CounterOne/>
          <CounterTwo/>
          <CounterThree/>
          
          <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
          Count-{count}
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
          </CountContext.Provider>

          <DataFetchingOne/>
          <DataFetchingTwo/>

          <ParentComponentTwo/>

          <CounterMemo/>
          <FocusInput/>
          <ClassTimer/>
          <HookTimer/>

          {/* Custom Hook */}
          <CustomHook/>
          <CustomCounter/>
          

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/*
class App extends Component {
  render() {
    return (
      <div className='App'>
        
      </div>
    )
  }
}
export default App;
*/

