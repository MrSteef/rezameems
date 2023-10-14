import '../App.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <h1>Reza Meems</h1>
      <h2>De lijsttrekker voor iedereen</h2>
      <Link to="/partijen">Bekijk de partijen</Link>
      <Link to="/kieszijzer">Probeer de kieswijzer</Link>
    </>
  )
}

export default Home
