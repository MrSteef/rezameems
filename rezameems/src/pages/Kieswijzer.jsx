// this element will handle giving the user a new question
// this will also keep track of the scores for each party

import { useState } from 'react'
// import questions from '../../database/questionLong'
import questions from '../../database/questionList.json'
import Question from '../components/Question'




const Kieswijzer = () => {
  const getRandomQuestion = (minAbsurdity, maxAbsurdity, questionHistory) => {
    let options = questions.filter(question => {
      if (minAbsurdity > question.absurdity) return false
      if (question.absurdity > maxAbsurdity) return false
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
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
    {min: 1, max: 1},
  ]
  const quizLength = absurdityProgression.length
  let firstQuestionId = getRandomQuestion(1, 1, [])
  const [progress, setProgress] = useState(1)
  const [question, setQuestion] = useState(questions[firstQuestionId]) // todo make this a random question
  const [scores, setScores] = useState({
    PvdAGL: 0,
    BBB: 0,
    CDA: 0,
    D66: 0,
    FvD: 0,
    Volt: 0,
    PVV: 0,
    NSC: 0,
    VVD: 0,
    PvdD: 0
  })
  const [questionHistory, setQuestionHistory] = useState([firstQuestionId])

  const updateScores = (scoreChanges) => {
    let newScores = scores
    Object.keys(scoreChanges).forEach(party => {
      newScores[party] += scoreChanges[party]
    })
    setScores(newScores)
  }

  const chooseAnswer = (answerId) => {
    // get selected answer from id
    let selectedAnswer = question.answers.find(answer => answer.id === answerId)

    // check for error modifier
    let errorModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'error')
    if (errorModifier !== undefined) {
      console.log('error modifier triggered') // todo implement
    }

    // check for redirect modifier
    let redirectModifier = selectedAnswer.modifiers.find(modifier => modifier.type === 'redirect')
    if (redirectModifier !== undefined) {
      console.log('redirect modifier triggered') // todo implement
      // type = redirect
      // options.window = current | new
      // options.url = url
    }

    // apply score changes
    let scoreChanges = selectedAnswer.effects
    updateScores(scoreChanges)

    // check if the quiz has been finished
    // todo implement
    if (progress >= quizLength) {
      console.log('finished')
    }

    // go to the next question
    // check for followup modifier
    let followUp = selectedAnswer.modifiers.find(modifier => modifier.type === 'followup')
    if (followUp !== undefined) {
      setNewQuestion(followUp.option) // this breaks
    } else {
      let minAbsurdity = absurdityProgression[progress].min
      let maxAbsurdity = absurdityProgression[progress].max
      setNewQuestion(getRandomQuestion(minAbsurdity, maxAbsurdity, questionHistory))
    }
  }

  // not yet tested
  const setNewQuestion = (questionId) => {
    let newQuestion = questions.find(question => question.id === questionId)
    setQuestionHistory(questionHistory => [...questionHistory, questionId])
    setProgress(progress => progress + 1)
    setQuestion(newQuestion)
  }

  


return <>
  <main className="colspan12">
    <p>Vraag {progress} van de {quizLength}</p>
    <Question question={question} chooseAnswer={chooseAnswer}/>
  </main>
</>

}

export default Kieswijzer