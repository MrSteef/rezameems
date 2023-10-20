import '../App.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <main className='colspan12'>
      <h1>Reza Meems</h1>
      <h2>De lijsttrekker voor iedereen</h2>
      <Link to="/partijen">Bekijk de partijen</Link>
      <Link to="/kieswijzer">Probeer de kieswijzer</Link>
    </main>
  )
}

export default Home
