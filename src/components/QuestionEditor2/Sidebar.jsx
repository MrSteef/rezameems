import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Sidebar = ({questionList, setQuestionList}) => {
  const uploadQuestionList = (e) => {
    parseJsonFile(e.target.files[0])
      .then(json => {
        setQuestionList(json)
      })
      .catch(error => {
        alert('something went wrong')
        console.error(error)
      })
  }
  const addQuestion = () => {
    let clone = structuredClone(questionList)
    let id
    if (questionList.length > 0) {
      id = Math.max(...questionList.map(question => question.id)) + 1
    } else {
      id = 0
    }
    clone.push(  {
      id,
      isFollowup: false,
      text: "New question",
      type: "mc",
      absurdity: 1,
      modifiers: [],
      answers: []
    })

    setQuestionList(clone);
  }

  return (
    <aside className='colspan4' >
      <label htmlFor='questionListUpload'>Upload Question List</label>
      <input type='file' name='questionListUpload' accept='.json' onChange={(e) => uploadQuestionList(e)} />
      <br />
      <a download='questionList.json' href={`data:text/json;charset=utf-8,${JSON.stringify(questionList)}`}>download</a>

      <ul id='questionList'>
        {questionList.map(question => {
          return <li key={question.id}>
            <NavLink to={`/kieswijzer/editor/${question.id}`}>{question.text == '' ? 'Blank question' : question.text}</NavLink>
          </li>
        })}
      </ul>
      <button onClick={e => addQuestion()}>Add Question</button>
    </aside>
  )
}
Sidebar.propTypes = {
  questionList: PropTypes.array.isRequired, 
  setQuestionList: PropTypes.func.isRequired,
}
export default Sidebar

async function parseJsonFile(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = event => resolve(JSON.parse(event.target.result))
    fileReader.onerror = error => reject(error)
    fileReader.readAsText(file)
  })
}