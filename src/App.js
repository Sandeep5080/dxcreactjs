import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import Fragments from './components/Fragments';
import NewTable from './components/NewTable';
import Parentcomp from './components/Parentcomp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FrParentInput from './components/refs/FrParentInput';
import ParentCallbackRefTextInput from './components/ParentCallbackRefTextInput';
import PortalDemo from './components/PortalDemo';
import ClassCounter from './components/hooks/ClassCounter';
import HookCounter from './components/hooks/HookCounter';
import HookCounter2 from './components/hooks/HookCounter2';
import HookCounter3 from './components/hooks/HookCounter3';
import CounterHook1 from './components/hooks/useeffect/CounterHook1';
import HookMouse from './components/hooks/useeffect/HookMouse';
import MouseContainer from './components/hooks/useeffect/MouseContainer';
import DataFetching from './components/hooks/useeffect/DataFetching';
import ComponentA from './components/contexthook/ComponentA';
 
import React from 'react';



export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      
      <UserContext.Provider value = {'sandeep'} >
        <ComponentA/>
     </UserContext.Provider>
      

    </div>
  );
}
export default App;
