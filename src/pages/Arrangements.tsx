import { arrangements } from '../data/arrangements'
import { ArrangementCard }  from '../components/ArrangementCard';

export const Arrangements = () => (
  <div>
    <h1>Mine Arrangementer</h1>
    <div className="arrangement-grid">
      {arrangements.map((arr, idx) => (
        <ArrangementCard key={idx} {...arr} />
      ))}
    </div>
  </div>
);