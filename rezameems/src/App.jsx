import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Kieswijzer from "./pages/Kieswijzer"
import Partijen from "./pages/Partijen"
import NotFound from "./pages/NotFound"
import QuestionEditor from "./pages/QuestionEditor"
import Footer from "./components/Footer"

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
            <Route index element={<QuestionEditor/>} />
            <Route path=":questionId" element={<QuestionEditor/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App