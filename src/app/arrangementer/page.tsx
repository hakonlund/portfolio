import { arrangements } from '@/data/arrangements';
import ArrangementsClient from '@/components/ArrangementsClient';

export default function Arrangements() {
  return (
    <div className="arrangements-page">
      <h1>Arrangementer</h1>
      <ArrangementsClient arrangements={arrangements} />
    </div>
  );
}
