import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import { connect } from "react-redux"
import Game from "./components/Game"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

function App(props) {
  const [question, setQuestion] = useState({
    content: "",
    ansA: "",
    ansB: "",
    corr: "",
  })

  useEffect(() => {
    getNewQuestion()
  })

  function getNewQuestion() {
    if (props.questions && props.questions.length > 0)
      setQuestion(
        props.questions[Math.floor(Math.random() * props.questions.length)]
      )
  }

  return (
    <div className='layout'>
      <Header />
      <Game question={question} getNewQuestion={getNewQuestion} />
    </div>
  )
}

const mapStateToProps = state => ({
  questions: state.firestore.ordered.questions,
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "questions" }])
)(App)
