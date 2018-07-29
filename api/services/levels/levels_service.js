const LEVELS = {
  GE: [
    { name: 'Dam', key: 'DAM', tutorials: 3 },
    { name: 'Facility', key: 'FACILITY', tutorials: 2 },
    { name: 'Runway', key: 'RUNWAY', tutorials: 5 },
  ],
  PD: [
    { name: 'Defection', key: 'DEFECTION', tutorials: 1 },
    { name: 'Investigation', key: 'INVESTIGATION', tutorials: 7 },
    { name: 'Extraction', key: 'EXTRACTION', tutorials: 18 },
  ],
};

const fetchLevels = async game => (LEVELS[game.toUpperCase()]);

module.exports = {
  fetchLevels,
};
