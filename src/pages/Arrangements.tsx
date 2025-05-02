import { arrangements } from '../data/arrangements'
import { ArrangementCard }  from '../components/ArrangementCard';

export const Arrangements = () =>   { 
  arrangements.sort((a, b) => a.tittel.localeCompare(b.tittel))

  return (
  <div>
    <h1>Mine Arrangementer</h1>
    <div className="arrangement-grid">
      {arrangements.map((arr, idx) => (
        <ArrangementCard key={idx} {...arr} />
      ))}
    </div>
  </div>
)};