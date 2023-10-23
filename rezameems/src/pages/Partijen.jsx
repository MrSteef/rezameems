import '../App.css'

function Partijen() {
  const parties = [
    {
      name: 'PvdAGL',
      description: 'PvdA / GroenLinks',
    },
    {
      name: 'BBB',
      description: 'Boer Burger Beweging',
    },
    {
      name: 'CDA',
      description: 'CDA',
    },
    {
      name: 'D66',
      description: 'D66',
    },
    {
      name: 'FvD',
      description: 'Forum',
    },
    {
      name: 'Volt',
      description: 'Volt',
    },
    {
      name: 'PVV',
      description: 'Partij voor de Vrijheid',
    },
    {
      name: 'NSC',
      description: 'Nieuw Sociaal Contract',
    },
    {
      name: 'VVD',
      description: 'VVD',
    },
    {
      name: 'PvdD',
      description: 'Partij voor de Dieren',
    }
  ]

  return (
    <main className='colspan12' id='party-list'>
      <h1>Dit zijn alle partijen van Reza Meems</h1>
      {
        parties.map(party => {
          return (
            <div className='partij-display'>
              <img src={`../../public/ali posters/${party.name}.png`}></img>
              <div>
                <h2>{party.name}</h2>
                <p>{party.description}</p>
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default Partijen
