import { arrangements } from '../data/arrangements'
import { ArrangementCard }  from '../components/ArrangementCard';
import { useState } from 'react';

export const Arrangements = () =>   { 

  const [filtrerteArrangemnet, setFiltrerteArrangement] = useState(
    arrangements.sort((a, b) => a.tittel.localeCompare(b.tittel))
  )

  const filtrerArrangement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const søkeord = e.target.value
    setFiltrerteArrangement(arrangements.filter(a => 
      a.tittel.toLowerCase().includes(søkeord.toLowerCase()) || 
      a.besetning.toLowerCase().includes(søkeord.toLowerCase()) || 
      a.artist.toLowerCase().includes(søkeord.toLowerCase())))
  }

  return (
  <div>
    <h1>Arrangementer</h1>
    <div>
      <input 
        type="text" 
        onChange={filtrerArrangement}
        placeholder='Søk'
        className='søkefelt'
        />
    </div>
    <div className="arrangement-grid">
      {filtrerteArrangemnet.map((arr, idx) => (
        <ArrangementCard key={idx} {...arr} />
      ))}
    </div>
  </div>
)};