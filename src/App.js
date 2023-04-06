import React, { Component } from 'react'
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList'
import ContextProvider from './Hooks/Context/ContextProvider'

export default class App extends Component {


  render() {
    return (
      <ContextProvider>
          <ToDoList />    
      </ContextProvider>
    )
  }
}
