import questions from '../questionList.json'

const Result = () => {
  let params = new URLSearchParams(window.location.search)
  let data = JSON.parse(atob(params.get('r')))
  let winner = data.s.find(s => s.score === Math.max(...data.s.map(s=>s.score))).party
  let replay = []
  for(let i = 0; i < data.a.length; i ++) {
    replay.push({q: data.q[i], a: data.a[i]})
  }
  return (
    <main className='colspan12'>
      <h1>Jouw favoriete partij van Reza Meems is {winner}</h1>
      <img src={`ali posters/${winner}.webp`} className='winningPoster'></img>
      <div id='replay'>
        <h2>Dit zijn de vragen die je hebt beantwoord:</h2>
        {replay.map(i => {
          return <>
            <h3>{questions.find(q => q.id === i.q).text}</h3>
            <p>{questions.find(q => q.id === i.q).answers.find(a => a.id === i.a).text}</p>
          </>
        })}
      </div>
      {
        (localStorage.getItem('questionHistory') !== null) ? // more stats can be added to this check, this is to check if any stats are available at all
        <div id='stats'>
          <h2>Jouw statistieken:</h2>
          {
            (localStorage.getItem('questionHistory') !== null) ? <>
                <h3>Je hebt {JSON.parse(localStorage.getItem('questionHistory')).length} van de {questions.length} beantwoord.</h3>
                <p>Doe de kieswijzer nog een keer om opnieuw 15 random vragen te krijgen.</p>
              </>
            : ''
          }
        </div>
        : ''
      }
      
    </main>
  )
}

export default Result