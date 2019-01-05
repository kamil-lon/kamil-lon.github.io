import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import Game from "./components/Game"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      firstAnswer: "",
      secondAnswer: "",
      correctAnswer: "",
      questions: [
        "asdasd",
        "qwdqswc",
        "vzcvczxczc",
        "sdfsdfsdfsdf",
        "wdqwdqwdqwd",
        "zxczxczx",
        "wdcsdcsdcsc",
        "srbfdvddsv",
        "qwqweqwe",
        "beeberb",
      ],
      answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    }
  }

  componentDidMount() {
    this.getNewQuestion()
  }

  render() {
    const { question, firstAnswer, secondAnswer, correctAnswer } = this.state
    return (
      <div className='layout'>
        <Header />
        <Game
          question={question}
          firstAnswer={firstAnswer}
          secondAnswer={secondAnswer}
          correctAnswer={correctAnswer}
          getNewQuestion={this.getNewQuestion}
        />
      </div>
    )
  }

  getNewQuestion = () => {
    this.setState({
      question: this.state.questions[Math.floor(Math.random() * 9)],
      firstAnswer: this.state.answers[Math.floor(Math.random() * 9)],
      secondAnswer: this.state.answers[Math.floor(Math.random() * 9)],
      correctAnswer: this.state.answers[Math.floor(Math.random() * 9)],
    })
  }
}

export default App
