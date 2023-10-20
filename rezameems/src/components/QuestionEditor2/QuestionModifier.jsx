import PropTypes from 'prop-types';

const QuestionModifier = ({questionList, setQuestionList, currentQuestionId}) => {

  return <>

  </>
}
QuestionModifier.propTypes = {
  questionList: PropTypes.object.isRequired, 
  setQuestionList: PropTypes.func.isRequired,
  currentQuestionId: PropTypes.number.isRequired,
}
export default QuestionModifier