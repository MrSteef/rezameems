import '../App.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <main className='colspan12' id="home">
      <h1>Reza Meems</h1>
      <h2>De lijsttrekker voor iedereen</h2>
      <div className="button-container">
        <Link to="/partijen">Bekijk de partijen</Link>
        <Link to="/kieswijzer">Probeer de kieswijzer</Link>
      </div>
    </main>
  )
}

export default Home
