import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import Game from "./components/Game"

class App extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Game
          question='aaa'
          correctAnswer='bbb'
          firstAnswer='bbb'
          secondAnswer='ccc'
        />
      </div>
    )
  }
}

export default App
