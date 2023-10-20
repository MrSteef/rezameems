import PropTypes from 'prop-types';
import '../../QuestionEditor.css'
import Answer from './Answer';
import QuestionModifier from './QuestionModifier';

const Question = ({question, setQuestion}) => {
  const updateQuestion = (e) => {
    setQuestion(question => {
      const newQuestion = structuredClone(question)
      if (e.target.type === 'checkbox') {
        newQuestion[e.target.dataset.path] = e.target.value === 'true' ? true : false
      } else {
        newQuestion[e.target.dataset.path] = e.target.value
      }
      return newQuestion
    })
  }

  return <fieldset className='question'>
    <legend>Question</legend>
    
    <label htmlFor="question-id">ID</label>
    <input type="number" name="question-id" value={question.id} disabled />
    <br />
    <label htmlFor="question-text">text</label>
    <input type="text" name="question-text" defaultValue={question.text} key={`question-text-${question.text}`} data-path='text' onBlur={e => updateQuestion(e)} />
    <br />
    <label htmlFor="question-is-followup">Is followup</label>
    <input type="checkbox" name="question-is-followup" defaultChecked={question.isFollowup } key={`question-isFollowup-${question.isFollowup}`} data-path='isFollowup' onChange={e => updateQuestion(e)} />
    <br />
    <label htmlFor="question-type">Type</label>
    <select name="question-type" defaultValue={question.type} key={`question-type-${question.type}`} data-path='type' onChange={e => updateQuestion(e)} >
      <option value="mc">Multiple Choice</option>
    </select> 
    <br />
    <label htmlFor="question-absurdity">Absurdity</label>
    <input type="number" name="question-absurdity" min='0' max='15' defaultValue={question.absurdity} key={`question-absurdity-${question.absurdity}`} data-path='absurdity' onChange={e => updateQuestion(e)} />  
  
    <fieldset className="question-modifier-container">
      {/* todo: add modifier button */}

      <legend>Modifiers</legend>
      {question.modifiers.map(modifier => {
        return <QuestionModifier key={modifier.id} modifier={modifier} setQuestion={setQuestion} />
      })}
    </fieldset>

    <fieldset className="answer-container">
      {/* todo: add answer button */}
      
      <legend>Answers</legend>
      {question.answers.map(answer => {
        return <Answer key={answer.id} answer={answer} setQuestion={setQuestion}/>
      })}
    </fieldset>
  </fieldset>
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  setQuestion: PropTypes.func.isRequired
}
 
export default Question;