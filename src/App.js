import React from "react";
import './App.css'
import './image.css'
import data from './data.js'
import Start_page from './Pages/StartPage.js'
import Game from './Pages/GamePage.js'
import Result from './Pages/ResultPage.js'
import Answer from './Pages/AnswerPage.js'
import Loading from './Pages/LoadingPage.js'




function App_cat(){
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [page, setPage] = React.useState('start')
  const questions = data()
  const question = questions[step];
  
  const onClickVariant = (index) => {
    if (index == question.correct){
      setCorrect(correct+1)
    }
    setStep(step+1);
    if (step == 9){
      setPage('loading')
    }

  };

  const onClickStart = ()=>{
      setPage('question')
  }

  const OnClickAnswer = ()=>{
      setPage('answer')
  }

  const transition = () =>{
    switch(page){
      case 'start':
          return <Start_page onClickStart = {onClickStart} />
      case 'question':
          return <Game question = {question} onClickVariant={onClickVariant}/>
      case 'loading':
        return <Loading setPage={setPage}/>
      case 'result':
        return <Result correct = {correct} OnClickAnswer={OnClickAnswer}/>
      case 'answer':
        return <Answer questions={questions}/>
    }
  }
  
  return(
    transition()
  )
}
export default App_cat
