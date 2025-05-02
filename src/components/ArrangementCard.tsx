type Props = {
    tittel: string;
    artist: string;
    originalTekst: string;
    dato: string;
    tilKor: string;
    besetning: string;
    fremførelse: string;
  };
  
export const ArrangementCard = ({ tittel, artist, dato, tilKor, besetning, fremførelse }: Props) => (
    <div className="card">
      <h3>{tittel}</h3>
      <p><strong>Artist:</strong> {artist}</p>
      <p><strong>Besetning:</strong> {besetning}</p>
      <p><strong>Arrangert:</strong> {dato}</p>
      {fremførelse &&
        <a href={fremførelse} target="_blank" rel="noopener noreferrer">▶ Lytt til fremførelse</a>
      }
    </div>
  );