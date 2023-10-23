import PropTypes from 'prop-types';
import settings from './EditorSettings'

const AnswerModifier = ({answerId, modifier, setModifier, deleteModifier}) => {
  let modifierSettings = settings.answerModifierTypes.find(type => type.setting == modifier.type)

  const setOption = (option) => {
    modifier.option = (settings.answerModifierTypes.find(setting => setting.setting === modifier.type).optionType === 'number') ? parseInt(option) : option
    setModifier(modifier.type, modifier)
  }

  return <fieldset className='answer-modifier'>
    <legend>Modifier</legend>

    <input type="button" id={`answer-${answerId}-modifier-${modifier.id}-delete`} value="Delete Modifier" onClick={e => deleteModifier(modifier.type)} />
    <br />
    <label htmlFor={`answer-${answerId}-modifier-${modifier.type}-type`}>Type</label>
    <input type="text" name={`answer-${answerId}-modifier-${modifier.type}-type`} value={modifier.type} disabled />
    <br />
    <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-option`}>{modifierSettings.optionName}</label>
    <input type={modifierSettings.optionType} name={`answer-${answerId}-modifier-${modifier.id}-option`} defaultValue={modifier.option} key={`answer-${answerId}-modifier-${modifier.type}-option`} onChange={e => setOption(e.target.value)} />
            
  </fieldset>
}
AnswerModifier.propTypes = {
  answerId: PropTypes.number.isRequired,
  modifier: PropTypes.object.isRequired, 
  setModifier: PropTypes.func.isRequired,
  deleteModifier: PropTypes.func.isRequired,
}
export default AnswerModifier