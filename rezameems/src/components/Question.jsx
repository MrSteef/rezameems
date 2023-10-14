import PropTypes from 'prop-types';

const Question = ({question, chooseAnswer}) => {
  return ( 
    <>
      <h2>{question.text}</h2>
      {
        question.type === 'yes/no' ? (
          question.answers.map((answer) => {
            return <input type="button" key={answer.id} value={answer.text} onClick={() => {chooseAnswer(answer.id)}}></input>
          })
        ) : question.type === 'mc' ? (
          question.answers.map((answer) => {
            return <input type="button" key={answer.id} value={answer.text} onClick={() => {chooseAnswer(answer.id)}}></input>
          })
        ) : question.type === 'slider' ? (
          console.log('slider')
        ) : (
          console.log('unknown answer type')
        )
      }
    </>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  chooseAnswer: PropTypes.func.isRequired
 
}
 
export default Question;