import React, {useState} from 'react'
import Header from './Components/Header/index';
import './app.scss';
import Headline from './Components/Headline';
import Button from './Components/Button';
import List from './Components/List';
import {connect} from 'react-redux';
import {fetchPost} from './actions/index';
import post from './reducers/index';
const tempArr = [{
  fName : 'Bilal',
  lName : 'Bhojani',
  email : 'bilal@hotmail.com',
  age : 20,
  onlineStatus : true
}]

const initialState = {
  hideBtn : false,
}
function App(props) {
  function fetch(){
    props.fetchPost();
  }
  const buttonConfig = {
    buttonText : 'Get Posts',
    emitEvents : fetch,
  }
  return (
    
      <div data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to see!!" tempArr={tempArr} />
          <Button {...buttonConfig} />
          <div>
            {props.posts.length > 0 && 
              <div>
                {
            props?.posts?.map((post, index) => {
              const {title, body} = post;
              const listConfig = {
                title,
                desc : body,
              }
              return(
                <List key={index} {...listConfig} />
              )
            })
          }
              </div>
            }
          </div>          
        </section>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    posts : state.post
  }
}
export default connect(mapStateToProps,{fetchPost})(App);
