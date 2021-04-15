import React from 'react'
import Header from './Components/Header/index';
import './app.scss';
import Headline from './Components/Headline';
import {Provider} from 'react-redux';
import {store} from './createStore';

const tempArr = [{
  fName : 'Bilal',
  lName : 'Bhojani',
  email : 'bilal@hotmail.com',
  age : 20,
  onlineStatus : true
}]

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to see!!" tempArr={tempArr} />
        </section>
      </div>
    </Provider>
  )
}

export default App
