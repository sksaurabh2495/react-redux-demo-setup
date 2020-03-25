import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksPage1Container from './components/HooksPage1Container'  //with hooks
import UsersContainer from './components/UsersContainer'  //wihtout hooks

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksPage1Container />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
