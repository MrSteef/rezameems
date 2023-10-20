import '../App.css'
import questions from '../../database/questionLong'
import { NavLink, useParams } from 'react-router-dom'
import Question from '../components/QuestionEditor/Question'
import { useEffect, useRef, useState } from 'react'

function QuestionEditor() {
  const editableQuestionList = questions
  let {questionId} = useParams()
  if (questionId === undefined) {questionId = 0}
  const [question, setQuestion] = useState(editableQuestionList.find(q => q.id == questionId))
  const prevQuestionState = useRef(question);
  useEffect(() => {
    let index = editableQuestionList.indexOf(editableQuestionList.find(q => q.id == prevQuestionState.current.id))
    editableQuestionList[index] = prevQuestionState.current
    console.log(editableQuestionList)
    setQuestion(editableQuestionList.find(q => q.id == questionId))
  }, [editableQuestionList, questionId])
  useEffect(() => {
    prevQuestionState.current = question
  }, [question])

  return (
    <>
      <aside className='colspan4' id='questionList'>
        <label htmlFor='questionListUpload'>Upload Question List</label>
        <input type='file' name='questionListUpload' />

        <a download='questionList.json' href={`data:text/json;charset=utf-8,${JSON.stringify(editableQuestionList)}`}>download</a>

        <ul>
          {questions.map(question => {
            return <li key={question.id} >
              <NavLink to={`/kieswijzer/editor/${question.id}`}
                style={({ isActive }) => {return { color: isActive ? "red" : "" }}}
              >{question.text}</NavLink>
            </li>
          })}
        </ul>
      </aside>
      <main className='colspan8'>
        <Question question={question} setQuestion={setQuestion} questionList={editableQuestionList} />
      </main>
    </>
  )
}

export default QuestionEditor
