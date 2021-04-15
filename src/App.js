import React from 'react'
import Header from './Components/Header/index';
import './app.scss';
import Headline from './Components/Headline';

const tempArr = [{
  fName : 'Bilal',
  lName : 'Bhojani',
  email : 'bilal@hotmail.com',
  age : 20,
  onlineStatus : true
}]

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to see!!" tempArr={tempArr} />
      </section>
    </div>
  )
}

export default App
