import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Question from "./Question";

const Editor = () => {
  const [questionList, setQuestionList] = useState([]);
  let { questionId } = useParams();
  if (questionId === undefined) {
    questionId = 0;
  }

  const setQuestion = (question) => {
    let clone = structuredClone(questionList)
    let index = questionList.indexOf(
      clone.find((q) => q.id == questionId)
    );
    clone[index] = question;
    setQuestionList(clone);
  };

  const question = questionList.find((question) => question.id == questionId)

  return (
    <>
      <Sidebar questionList={questionList} setQuestionList={setQuestionList} />
      {
        (question !== undefined) ? 
          <Question
          question={question}
          setQuestion={setQuestion}
        /> : ''
      }
    </>
  );
};
export default Editor;
