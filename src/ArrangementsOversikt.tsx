import arrangement from './jsondata/arrangement.json'
import './ArrangementsOversikt.css'

export function ArrangementsOversikt () {
  return (
  <ul className='arrangementsListe'>
    {arrangement.map((a, i) => 
      <li key={i} className='listeelement'>
        <div>{a.Tittel} - {a.Artist}</div>
        <div>{a.Besetning}</div>
      </li>
    )}
  </ul>)}