import PropTypes from 'prop-types';
import settings from './EditorSettings'
import AnswerModifier from './AnswerModifier';

const Answer = ({answer, setAnswer, deleteAnswer}) => {
  const setText = (text) => {
    answer.text = text
    setAnswer(answer)
  }
  const setScoreEffect = (party, score) => {
    answer.effects.find(effect => effect.party === party).score = parseInt(score)
    setAnswer(answer.id, answer)
  }
  const addScoreEffect = (e) => {
    let party = document.querySelector(`[name="answer-${answer.id}-add-effect"]`).value
    answer.effects.push({party, score:0})
    setAnswer(answer.id, answer);
  }
  const addModifier = () => {
    let type = document.querySelector(`[name="answer-${answer.id}-add-modifier-type"]`).value
    answer.modifiers.push({
      type,
      option: ''
    })
    console.log(answer)
    setAnswer(answer.id, answer);
  }
  const setModifier = (type, modifier) => {
    let clone = structuredClone(answer)
    let index = answer.modifiers.indexOf(
      answer.modifiers.find((m) => m.type == type)
    );
    clone.modifiers[index] = modifier;
    setAnswer(answer.id, clone);
  }
  const deleteModifier = (type) => {
    answer.modifiers = answer.modifiers.filter(modifier => modifier.type != type)
    setAnswer(answer.id, answer)
  }

  return <fieldset className='answer'>
    <legend>Answer</legend>

    <input type="button" id={`answer-${answer.id}-delete`} value="Delete Answer" onClick={e => deleteAnswer(answer.id)} />
    <br />
    <label htmlFor={`answer-${answer.id}-id`}>ID</label>
    <input type="number" name={`answer-${answer.id}-id`} value={answer.id} disabled />
    <br />
    <label htmlFor={`answer-${answer.id}-text`}>Text</label>
    <input type="text" name={`answer-${answer.id}-text`} defaultValue={answer.text} key={`answer-${answer.id}text-${answer.text}`} data-path='text' onBlur={e => setText(e.target.value)} />
    <br />

    <fieldset>
      <legend>Score Effects</legend>
      
      {answer.effects.map(scoreEffect => {
        return <div key={`answer-${answer.id}-score-${scoreEffect.party}`}>
          <label htmlFor={`answer-${answer.id}-score-${scoreEffect.party}`}>{scoreEffect.party}</label>
          <input type="number" name={`answer-${answer.id}-score-${scoreEffect.party}`} min={settings.minScoreEffect} max={settings.maxScoreEffect} defaultValue={scoreEffect.score} onChange={e => {setScoreEffect(scoreEffect.party, e.target.value)}} />
        </div>
      })}
      <select name={`answer-${answer.id}-add-effect`}>
        {
        settings.parties.filter(party => {
          return !(answer.effects.map(effect => effect.party).includes(party))
        }).map(party => {
          return <option htmlFor={`answer-${answer.id}-add-effect`} key={party} value={party}>{party}</option>
        })}
      </select> 
      <button onClick={e => addScoreEffect(e)}>Add Score</button>
    </fieldset>

    <fieldset className='answer-modifier-container'>
      <legend>Modifiers</legend>
      {answer.modifiers.map(modifier => {
        return <AnswerModifier key={modifier.type} answerId={answer.id} modifier={modifier} setModifier={setModifier} deleteModifier={deleteModifier} />
      })}

      
      <select name={`answer-${answer.id}-add-modifier-type`}>
        {settings.answerModifierTypes.filter(type => {
          return !(answer.modifiers.map(modifier => modifier.type).includes(type.setting))
        }).map(modifier => {
          return <option key={modifier.setting} htmlFor={`answer-${answer.id}-add-modifier-type`} value={modifier.setting} disabled={answer.modifiers.map(modifier => modifier.setting).includes(modifier.setting)}>{modifier.display}</option>
        })}
      </select>

      <input type="button" name={`answer-${answer.id}-add-modifier`} value="Add Modifier" onClick={e => addModifier()}/>

    </fieldset>
      
  </fieldset>

}
Answer.propTypes = {
  answer: PropTypes.object.isRequired, 
  setAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
}
export default Answer