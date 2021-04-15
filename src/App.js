import React from 'react'
import Header from './Components/Header/index';
import './app.scss';
import Headline from './Components/Headline';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to see posts!!" />
      </section>
    </div>
  )
}

export default App
