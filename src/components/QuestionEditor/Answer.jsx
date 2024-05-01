import PropTypes from 'prop-types';
import '../../QuestionEditor.css'
import AnswerModifier from './AnswerModifier';

const Answer = ({answer, setQuestion}) => {
  const updateAnswer = (e) => {
    const path = e.target.dataset.path.split('.')
    setQuestion(question => {
      const newQuestion = structuredClone(question)
      if (path[0] === 'effects') {
        newQuestion.answers.find(qanswer => qanswer.id === answer.id).effects[path[1]] = e.target.value
      } else {
        newQuestion.answers.find(qanswer => qanswer.id === answer.id)[path[0]] = e.target.value
      }
      return newQuestion
    })
  }

  return <fieldset className='answer'>
    <legend>Answer</legend>
    <input type="button" id={`answer-${answer.id}-delete`} value="Delete Answer" />
    <br />
    <label htmlFor={`answer-${answer.id}-id`}>ID</label>
    <input type="number" name={`answer-${answer.id}-id`} value={answer.id} disabled />
    <br />
    <label htmlFor={`answer-${answer.id}-text`}>Text</label>
    <input type="text" name={`answer-${answer.id}-text`} defaultValue={answer.text} key={`answer-${answer.id}text-${answer.text}`} data-path='text' onBlur={e => updateAnswer(e)} />
    <br />

    <fieldset className='score-effects'>
      <legend>Score Effects</legend>
      <label htmlFor={`answer-${answer.id}-score-PvdAGL`}>PvdAGL </label>
      <input type="number" name={`answer-${answer.id}-score-PvdAGL`} min='-15' max='15' defaultValue={answer.effects.PvdAGL} key={`answer-${answer.id}-score-PvdAGL-${answer.effects.PvdAGL}`} data-path='effects.PvdAGL' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-BBB`}>BBB </label>
      <input type="number" name={`answer-${answer.id}-score-BBB`} min='-15' max='15' defaultValue={answer.effects.BBB} key={`answer-${answer.id}-score-BBB-${answer.effects.BBB}`} data-path='effects.BBB' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-CDA`}>CDA </label>
      <input type="number" name={`answer-${answer.id}-score-CDA`} min='-15' max='15' defaultValue={answer.effects.CDA} key={`answer-${answer.id}-score-CDA-${answer.effects.CDA}`} data-path='effects.CDA' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-D66`}>D66 </label>
      <input type="number" name={`answer-${answer.id}-score-D66`} min='-15' max='15' defaultValue={answer.effects.D66} key={`answer-${answer.id}-score-D66-${answer.effects.D66}`} data-path='effects.D66' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-FvD`}>FvD </label>
      <input type="number" name={`answer-${answer.id}-score-FvD`} min='-15' max='15' defaultValue={answer.effects.FvD} key={`answer-${answer.id}-score-FvD-${answer.effects.FvD}`} data-path='effects.FvD' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-Volt`}>Volt </label>
      <input type="number" name={`answer-${answer.id}-score-Volt`} min='-15' max='15' defaultValue={answer.effects.Volt} key={`answer-${answer.id}-score-Volt-${answer.effects.Volt}`} data-path='effects.Volt' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-PVV`}>PVV </label>
      <input type="number" name={`answer-${answer.id}-score-PVV`} min='-15' max='15' defaultValue={answer.effects.PVV} key={`answer-${answer.id}-score-PVV-${answer.effects.PVV}`} data-path='effects.PVV' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-NSC`}>NSC </label>
      <input type="number" name={`answer-${answer.id}-score-NSC`} min='-15' max='15' defaultValue={answer.effects.NSC} key={`answer-${answer.id}-score-NSC-${answer.effects.NSC}`} data-path='effects.NSC' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-VVD`}>VVD </label>
      <input type="number" name={`answer-${answer.id}-score-VVD`} min='-15' max='15' defaultValue={answer.effects.VVD} key={`answer-${answer.id}-score-VVD-${answer.effects.VVD}`} data-path='effects.VVD' onChange={e => updateAnswer(e)} />
      <br />
      <label htmlFor={`answer-${answer.id}-score-PvdD`}>PvdD </label>
      <input type="number" name={`answer-${answer.id}-score-PvdD`} min='-15' max='15' defaultValue={answer.effects.PvdD} key={`answer-${answer.id}-score-PvdD-${answer.effects.PvdD}`} data-path='effects.PvdD' onChange={e => updateAnswer(e)} />
    </fieldset>

    <fieldset className="answer-modifier-container">
      <legend>Modifiers</legend>
      {answer.modifiers.map(modifier => {
        return <AnswerModifier key={modifier.id} answerId={answer.id} answerModifier={modifier} setQuestion={setQuestion} />
      })}

      <select name={`answer-${answer.id}-add-modifier-type`}>
        <option htmlFor={`answer-${answer.id}-add-modifier-type`} value="followup" disabled={answer.modifiers.map(modifier => modifier.type).includes('followup')}>Followup Question</option>
        <option htmlFor={`answer-${answer.id}-add-modifier-type`} value="redirect"disabled={answer.modifiers.map(modifier => modifier.type).includes('redirect')}>Redirect to a website</option>
        <option htmlFor={`answer-${answer.id}-add-modifier-type`} value="error"disabled={answer.modifiers.map(modifier => modifier.type).includes('error')}>Show an error message</option>
      </select>

      <input type="button" name={`answer-${answer.id}-add-modifier`} value="Add Answer Modifier"></input>

    </fieldset>
  </fieldset>
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired, 
  setQuestion: PropTypes.func.isRequired
}
 
export default Answer;