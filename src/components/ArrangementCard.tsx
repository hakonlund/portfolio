'use client';

import { useState, useRef } from 'react';
import { Chip, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    tittel: string;
    artist: string;
    originalTekst: string;
    dato: string;
    besetning: string;
    fremførelse: string;
    previewPdf?: string;
    previewMp3?: string;
  };

export const ArrangementCard = ({ tittel, artist, dato, besetning, fremførelse, previewPdf, previewMp3 }: Props) => {
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenAudioModal = () => {
    setIsAudioModalOpen(true);
    // Use setTimeout to ensure modal is open and audio element is rendered
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const handleCloseAudioModal = () => {
    // Pause audio before closing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsAudioModalOpen(false);
  };

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

      {/* Preview section */}
      {(previewPdf || previewMp3) && (
        <div className="preview-section">
          {previewPdf && (
            <a href={previewPdf} target="_blank" rel="noopener noreferrer" className="preview-link">
              <PictureAsPdfIcon fontSize="small" /> Se noteeksempel
            </a>
          )}

          {previewMp3 && (
            <>
              <div className="audio-trigger" onClick={handleOpenAudioModal}>
                <AudioFileIcon fontSize="small" /> Lytt til utdrag
              </div>

              <Dialog
                open={isAudioModalOpen}
                onClose={handleCloseAudioModal}
                maxWidth="sm"
                fullWidth
              >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {tittel}
                  <IconButton onClick={handleCloseAudioModal} size="small">
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <div style={{ padding: '1rem 0' }}>
                    <audio ref={audioRef} controls preload="metadata" style={{ width: '100%' }}>
                      <source src={previewMp3} type="audio/mpeg" />
                      Din nettleser støtter ikke lydavspilling.
                    </audio>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      )}
    </div>
  );
};
