import { arrangements } from '../data/arrangements'
import { ArrangementCard }  from '../components/ArrangementCard';
import { useState, useMemo } from 'react';
import { TextField, InputAdornment, IconButton, Chip, MenuItem, Select, FormControl, InputLabel, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

type SortOption = 'tittel' | 'dato-nyest' | 'dato-eldst' | 'artist';

export const Arrangements = () =>   {
  const [søkeord, setSøkeord] = useState('');
  const [valgtBesetning, setValgtBesetning] = useState<string>('');
  const [sortering, setSortering] = useState<SortOption>('tittel');

  // Hent unike besetninger
  const besetninger = useMemo(() => {
    const unikeBesetninger = new Set<string>();
    arrangements.forEach(arr => {
      // Split på / for å håndtere "SATB/SSAA"
      arr.besetning.split('/').forEach(b => {
        const trimmet = b.trim();
        if (trimmet) unikeBesetninger.add(trimmet);
      });
    });
    return Array.from(unikeBesetninger).sort();
  }, []);

  // Filtrer og sorter arrangementer
  const filtrerteArrangemnet = useMemo(() => {
    let resultat = arrangements;

    // Filtrer på søkeord
    if (søkeord) {
      resultat = resultat.filter(a =>
        a.tittel.toLowerCase().includes(søkeord.toLowerCase()) ||
        a.besetning.toLowerCase().includes(søkeord.toLowerCase()) ||
        a.artist.toLowerCase().includes(søkeord.toLowerCase())
      );
    }

    // Filtrer på besetning
    if (valgtBesetning) {
      resultat = resultat.filter(a =>
        a.besetning.includes(valgtBesetning)
      );
    }

    // Sorter
    const sortert = [...resultat];
    switch (sortering) {
      case 'tittel':
        sortert.sort((a, b) => a.tittel.localeCompare(b.tittel));
        break;
      case 'artist':
        sortert.sort((a, b) => a.artist.localeCompare(b.artist));
        break;
      case 'dato-nyest':
        sortert.sort((a, b) => {
          const datoA = new Date(a.dato.split('.').reverse().join('-'));
          const datoB = new Date(b.dato.split('.').reverse().join('-'));
          return datoB.getTime() - datoA.getTime();
        });
        break;
      case 'dato-eldst':
        sortert.sort((a, b) => {
          const datoA = new Date(a.dato.split('.').reverse().join('-'));
          const datoB = new Date(b.dato.split('.').reverse().join('-'));
          return datoA.getTime() - datoB.getTime();
        });
        break;
    }

    return sortert;
  }, [søkeord, valgtBesetning, sortering]);

  const handleClearSearch = () => {
    setSøkeord('');
  };

  return (
  <div className="arrangements-page">
    <h1>Arrangementer</h1>

    {/* Søkefelt */}
    <div className="search-container">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Søk etter tittel, artist eller besetning..."
        value={søkeord}
        onChange={(e) => setSøkeord(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: søkeord && (
            <InputAdornment position="end">
              <IconButton onClick={handleClearSearch} size="small">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>

    {/* Besetningsfiltre */}
    <div className="filter-chips">
      <Chip
        label="Alle"
        onClick={() => setValgtBesetning('')}
        color={valgtBesetning === '' ? 'primary' : 'default'}
        className="besetning-chip"
      />
      {besetninger.map(besetning => (
        <Chip
          key={besetning}
          label={besetning}
          onClick={() => setValgtBesetning(besetning === valgtBesetning ? '' : besetning)}
          color={valgtBesetning === besetning ? 'primary' : 'default'}
          className="besetning-chip"
        />
      ))}
    </div>

    {/* Sortering og resultatteller */}
    <div className="controls-row">
      <div className="result-count">
        Viser {filtrerteArrangemnet.length} av {arrangements.length} arrangementer
      </div>
      <FormControl variant="outlined" size="small" className="sort-select">
        <InputLabel>Sorter etter</InputLabel>
        <Select
          value={sortering}
          onChange={(e) => setSortering(e.target.value as SortOption)}
          label="Sorter etter"
        >
          <MenuItem value="tittel">Tittel (A-Å)</MenuItem>
          <MenuItem value="artist">Artist (A-Å)</MenuItem>
          <MenuItem value="dato-nyest">Dato (nyest først)</MenuItem>
          <MenuItem value="dato-eldst">Dato (eldst først)</MenuItem>
        </Select>
      </FormControl>
    </div>

    {/* Arrangement grid */}
    {filtrerteArrangemnet.length > 0 ? (
      <div className="arrangement-grid">
        {filtrerteArrangemnet.map((arr, idx) => (
          <Fade in={true} key={idx} timeout={300 + idx * 50}>
            <div>
              <ArrangementCard {...arr} />
            </div>
          </Fade>
        ))}
      </div>
    ) : (
      <div className="empty-state">
        <p>Ingen arrangementer matchet søket ditt.</p>
        <p>Prøv et annet søkeord eller fjern filtre.</p>
      </div>
    )}
  </div>
)};
