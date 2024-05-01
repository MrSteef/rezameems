import PropTypes from 'prop-types';

const Question = ({question, chooseAnswer}) => {
  return ( 
    <>
      <h2>{question.text}</h2>
      <div className="button-container">
        {
            question.answers.map((answer) => {
              return <input type="button" key={answer.id} value={answer.text} onClick={() => {chooseAnswer(answer.id)}}></input>
            })
        }
      </div>
    </>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  chooseAnswer: PropTypes.func.isRequired
 
}
 
export default Question;