import PropTypes from 'prop-types';
import '../../QuestionEditor.css'
import { useState } from 'react';

const AnswerModifier = ({answerId, answerModifier, setQuestion}) => {
  const [modifier, setModifier] = useState(answerModifier)

  const jsonify = () => {
    let json
    switch (modifier.type) {
      case 'followup':
        var id = document.querySelector(`input[name='answer-${answerId}-modifier-${modifier.id}-id']`).value
        json = {
          id,
          type: 'followup',
          options: {
            questionId: document.querySelector(`input[name='answer-${answerId}-modifier-${modifier.id}-option']`).value
          }
        }
        break;
      case 'redirect':
        console.log('redirect')
        break;
      case 'error':
        console.log('error')
        break;
    }
    setModifier({json})
  }

  return <fieldset className='answer-modifier'>
    {(() => {
      switch (modifier.type) {
        case 'followup':
          return (
            <>
              <legend>Followup Modifier</legend>
              <input type="button" id={`answer-${answerId}-modifier-${modifier.id}-delete`} value="Delete Modifier" />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-id`}>ID</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-id`} value={modifier.id} disabled />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-option`}>Question ID</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-option`} defaultValue={modifier.options.questionId} key={`answer-${answerId}-modifier-${modifier.id}-option-${modifier.options.questionId}`} onChange={e => jsonify(e)} />
            </>
          )
        case 'redirect':
          return (
            <>
              <legend>Redirect Modifier</legend>
              <input type="button" id={`answer-${answerId}-modifier-${modifier.id}-delete`} value="Delete Modifier" />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-id`}>ID</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-id`} value={modifier.id} disabled />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-option`}>Redirect URL</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-option`} defaultValue={modifier.options.url} key={`answer-${answerId}-modifier-${modifier.id}-option-${modifier.options.url}`} onChange={e => jsonify(e)} />
            </>
          )
        case 'error':
          return (
            <>
              <legend>Error Modifier</legend>
              <input type="button" id={`answer-${answerId}-modifier-${modifier.id}-delete`} value="Delete Modifier" />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-id`}>ID</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-id`} value={modifier.id} disabled />
              <br />
              <label htmlFor={`answer-${answerId}-modifier-${modifier.id}-option`}>Error message</label>
              <input type="number" name={`answer-${answerId}-modifier-${modifier.id}-option`} defaultValue={modifier.options.message} key={`answer-${answerId}-modifier-${modifier.id}-option-${modifier.options.message}`} onChange={e => jsonify(e)} />
            </>
          )
        default:
          return null
      }
    })()}
  </fieldset>
}

AnswerModifier.propTypes = {
  answerId: PropTypes.number.isRequired,
  answerModifier: PropTypes.object.isRequired,
  setQuestion: PropTypes.func.isRequired
}
 
export default AnswerModifier;