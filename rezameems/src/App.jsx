import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Kieswijzer from "./pages/Kieswijzer"
import Partijen from "./pages/Partijen"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partijen">
          <Route index element={<Partijen />} />
        </Route>
        <Route path="/kieswijzer" element={<Kieswijzer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App