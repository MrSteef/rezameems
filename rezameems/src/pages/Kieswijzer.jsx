// this element will handle giving the user a new question
// this will also keep track of the scores for each party

import { useState } from 'react'
import questions from '../../database/questionList.json'
import Question from '../components/Question'
import { useNavigate } from 'react-router-dom'




const Kieswijzer = () => {
  const getRandomQuestion = (absurdityRange, questionHistory) => {
    let options = questions.filter(question => {
      if (absurdityRange.min > question.absurdity) return false
      if (question.absurdity > absurdityRange.max) return false
      if (question.isFollowup) return false
      if (questionHistory.includes(question.id)) return false
      return true
    })
    let amount = options.length
    let randomIndex = Math.floor(Math.random() * amount)
    return options[randomIndex].id
  }

  const absurdityProgression = [
    {min: 1, max: 1},
    {min: 1, max: 2},
    {min: 1, max: 3},
    {min: 1, max: 4},
    {min: 1, max: 5},
    {min: 1, max: 6},
    {min: 1, max: 7},
    {min: 1, max: 8},
    {min: 1, max: 9},
    {min: 1, max: 10},
    {min: 1, max: 11},
    {min: 1, max: 12},
    {min: 1, max: 13},
    {min: 1, max: 14},
    {min: 1, max: 15},
  ]
  const quizLength = absurdityProgression.length
  let firstQuestionId = getRandomQuestion(absurdityProgression[0], [])
  const [progress, setProgress] = useState(1)
  const [question, setQuestion] = useState(questions[firstQuestionId]) // todo make this a random question
  const [scores, setScores] = useState([])
  const [questionHistory, setQuestionHistory] = useState([firstQuestionId])
  const [answerHistory, setAnswerHistory] = useState([])
  const navigate = useNavigate()

  const updateScores = (scoreChanges) => {
    let newScores = scores
    scoreChanges.forEach(effect => {
      if (!newScores.map(score => score.party).includes(effect.party)) {
        newScores.push(effect)
      } else {
        newScores.find(score => score.party === effect.party).score += effect.score
      }
    })
    setScores(newScores)
  }

  const finish = () => {
    // save question history to localStorage
    let localHistory = JSON.parse(localStorage.getItem('questionHistory'))
    if (localHistory === null) {localHistory = []}
    questionHistory.forEach(q => {if(!localHistory.includes(q)) {localHistory.push(q)}})
    localStorage.setItem('questionHistory', JSON.stringify(localHistory))


    let result = {t: Date.now(), q: questionHistory, a: answerHistory, s: scores}
    let encoded = btoa(JSON.stringify(result))
    // save results
    navigate(`/kieswijzer/resultaat?r=${encoded}`)
  }

  if (answerHistory.length >= quizLength) {
    finish()
    return
  }

  const chooseAnswer = (answerId) => {
    // get selected answer from id
    let selectedAnswer = question.answers.find(answer => answer.id === answerId)

    // check for redirect modifier
    let redirectModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'redirect')
    if (redirectModifier !== undefined) {
      window.open(redirectModifier.option)
    }

    // check for finish modifier
    let finishModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'finish')
    if (finishModifier !== undefined) {
      navigate(`/`)
      return
    }

    // check for error modifier
    let errorModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'error')
    if (errorModifier !== undefined) {
      alert(errorModifier.option)
    }

    // apply score changes
    let scoreChanges = selectedAnswer.effects
    let newAnswerHistory = structuredClone(answerHistory)
    newAnswerHistory.push(answerId)
    setAnswerHistory(newAnswerHistory)
    updateScores(scoreChanges)

    if (progress < quizLength) {
    // go to the next question
    // check for followup modifier
    let followupModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'followup')
    if (followupModifier !== undefined) {
      setNewQuestion(followupModifier.option)
    } else {
      setNewQuestion(getRandomQuestion(absurdityProgression[progress], questionHistory))
    }
    }
  }

  // not yet tested
  const setNewQuestion = (questionId) => {
    let newQuestion = questions.find(question => question.id === parseInt(questionId)) // FIXME after improving the editor, remove parseInt
    setQuestionHistory(questionHistory => [...questionHistory, questionId])
    setProgress(progress => progress + 1)
    setQuestion(newQuestion)
  }

  


return <>
  <main className="colspan12" id="kieswijzer">
    <p>Vraag {progress} van de {quizLength}</p>
    <Question question={question} chooseAnswer={chooseAnswer}/>
  </main>
</>

}

export default Kieswijzer