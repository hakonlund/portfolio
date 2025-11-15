import { Chip } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

type Props = {
    tittel: string;
    artist: string;
    originalTekst: string;
    dato: string;
    tilKor: string;
    besetning: string;
    fremførelse: string;
  };

export const ArrangementCard = ({ tittel, artist, dato, tilKor, besetning, fremførelse }: Props) => {
  // Farger for forskjellige kortyper
  const getBesetningColor = (besetning: string): "primary" | "secondary" | "success" | "warning" | "error" | "info" => {
    // Blandakor (mixed choir) - Navy blue
    if (besetning.includes('SATB')) return 'primary';
    // Mannskor (men's choir) - Amber/gold
    if (besetning.includes('TTBB')) return 'warning';
    // Kvinnekor (women's choir) - Purple/violet
    if (besetning.includes('SSAA') || besetning.includes('SSMAA')) return 'secondary';
    return 'default' as any;
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{tittel}</h3>
        {fremførelse && (
          <PlayCircleOutlineIcon className="play-icon" />
        )}
      </div>

      <div className="besetning-badges">
        {besetning.split('/').map((b, idx) => (
          <Chip
            key={idx}
            label={b.trim()}
            size="small"
            color={getBesetningColor(b.trim())}
            className="besetning-badge"
          />
        ))}
      </div>

      <p><strong>Artist:</strong> {artist}</p>
      <p><strong>Arrangert:</strong> {dato}</p>

      {fremførelse && (
        <a href={fremførelse} target="_blank" rel="noopener noreferrer" className="listen-link">
          <PlayCircleOutlineIcon fontSize="small" /> Lytt til fremførelse
        </a>
      )}
    </div>
  );
};
