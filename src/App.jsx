import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Kieswijzer from "./pages/Kieswijzer"
import Partijen from "./pages/Partijen"
import NotFound from "./pages/NotFound"
import Editor from "./components/QuestionEditor2/Editor"
import Footer from "./components/Footer"
import Result from "./pages/Result"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partijen">
          <Route index element={<Partijen />} />
        </Route>
        <Route path="/kieswijzer">
          <Route index element={<Kieswijzer />} />
          <Route path="editor">
            <Route index element={<Editor/>} />
            <Route path=":questionId" element={<Editor/>} />
          </Route>
          <Route path="resultaat">
            <Route index element={<Result/>} />
            <Route path=":result" element={<Result/>} />
          </Route>
          <Route path=":firstQuestionId" element={<Kieswijzer/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App