import PropTypes from 'prop-types';
import settings from './EditorSettings'
import Answer from './Answer';

const Question = ({question, setQuestion}) => {
  const setText = (text) => {
    question.text = text
    setQuestion(question);
  }
  const setIsFollowup = (isFollowup) => {
    question.isFollowup = isFollowup
    setQuestion(question);
  }
  const setType = (type) => {
    question.type = type
    setQuestion(question);
  }
  const setAbsurdity = (absurdity) => {
    question.absurdity = absurdity
    setQuestion(question);
  }
  const addAnswer = () => {
    let id
    if (question.answers.length > 0) {
      id = Math.max(...question.answers.map(answer => answer.id)) + 1
    } else {
      id = 0
    }
    question.answers.push({
      id,
      text: "",
      modifiers: [],
      effects: []
    })
    setQuestion(question);
  }
  const setAnswer = (id, answer) => {
    let clone = structuredClone(question)
    let index = question.answers.indexOf(
      question.answers.find((a) => a.id == id)
    );
    clone.answers[index] = answer;
    setQuestion(clone);
  }
  const deleteAnswer = (id) => {
    question.answers = question.answers.filter(answer => answer.id != id)
    setQuestion(question)
  }
  const addModifier = (e) => {
    
  }
  const setModifier = (id, modifier) => {

  }

  return <main className='colspan8'>
    <fieldset>
      <legend>Question</legend>
      
      <label htmlFor="question-id">ID</label>
      <input type="number" name="question-id" value={question.id} disabled />
      <br />
      <label htmlFor="question-text">text</label>
      <input type="text" name="question-text" defaultValue={question.text} key={`question-text-${question.text}`} data-path='text' onBlur={e => setText(e.target.value)} />
      <br />
      <label htmlFor="question-is-followup">Is followup</label>
      <input type="checkbox" name="question-is-followup" checked={question.isFollowup } defaultValue={question.isFollowup } key={`question-isFollowup-${question.isFollowup}`} data-path='isFollowup' onChange={e => setIsFollowup(e.target.checked)} />
      <br />
      {/* <label htmlFor="question-type">Type</label>
      <select name="question-type" defaultValue={question.type} key={`question-type-${question.type}`} data-path='type' onChange={e => setType(e.target.value)} >
        {settings.questionTypes.map(type => {
          return <option key={type.setting} value={type.setting}>{type.display}</option>
        })}
      </select> 
      <br /> */}
      <label htmlFor="question-absurdity">Absurdity</label>
      <input type="number" name="question-absurdity" min={settings.minAbsurdity} max={settings.maxAbsurdity} defaultValue={question.absurdity} key={`question-absurdity-${question.absurdity}`} data-path='absurdity' onChange={e => setAbsurdity(e.target.value)} />  
  
      {/* <fieldset>
        <legend>Question Modifiers</legend>

        <select name="add-modifier-type">
          {settings.questionModifierTypes.map(type => {
            return <option htmlFor="add-modifier-type" key={type.setting} value={type.setting}>{type.display}</option>
          })}
        </select> 
        <button>Add Modifier</button>
        {/* add button functionality */}
        {/* add actual modifiers */}
      {/* </fieldset> */}

      <fieldset className='answer-container'>
        <legend>Answers</legend>

        {question.answers.map(answer => {
          return <Answer key={answer.id} answer={answer} setAnswer={setAnswer} deleteAnswer={deleteAnswer}/>
        })}
        
        <button onClick={e => {addAnswer(e)}}>Add Answer</button>
      </fieldset>

    </fieldset>
  </main>
}
Question.propTypes = {
  question: PropTypes.object.isRequired, 
  setQuestion: PropTypes.func.isRequired,
}
export default Question