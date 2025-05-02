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
      <p><strong>Dato:</strong> {dato}</p>
      <p><strong>Besetning:</strong> {besetning}</p>
      <a href={fremførelse} target="_blank" rel="noopener noreferrer">▶ Lytt til fremførelse</a>
    </div>
  );