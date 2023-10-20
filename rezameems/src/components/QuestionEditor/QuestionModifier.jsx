import PropTypes from 'prop-types';
import '../../QuestionEditor.css'

const QuestionModifier = ({questionModifier, setQuestion}) => {
  return <>
    <h4>QuestionModifier</h4>
  </>
}

QuestionModifier.propTypes = {
  questionModifier: PropTypes.object.isRequired,
  setQuestion: PropTypes.func.isRequired
}
 
export default QuestionModifier;