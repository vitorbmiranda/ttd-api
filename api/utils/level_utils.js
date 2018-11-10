const ALL_LEVELS = {
  ge: [
    'dam', 'facility', 'runway', 'surface1', 'bunker1',
    'silo', 'frigate', 'surface2', 'bunker2', 'statue',
    'archives', 'streets', 'depot', 'train', 'jungle',
    'control', 'caverns', 'cradle', 'aztec', 'egypt',
  ],
  pd: [
    'defection', 'investigation', 'extraction', 'villa', 'chicago',
    'g5', 'infiltration', 'rescue', 'escape', 'airbase',
    'af1', 'crashsite', 'pelagic', 'deepsea', 'ci',
    'attackship', 'ruins', 'mbr', 'sos', 'war', 'duel',
  ],
};

const allGames = () => Object.keys(ALL_LEVELS);
const allLevels = () => allGames().reduce((acc, current) => (acc.concat(ALL_LEVELS[current])), []);
const isValidLevel = level => allLevels().includes(level);
const isValidGame = game => (!!ALL_LEVELS[game]);
const isLevelOfGame = (game, level) => (isValidGame(game) && !!ALL_LEVELS[game].includes(level));

module.exports = {
  allGames,
  allLevels,
  isValidLevel,
  isValidGame,
  isLevelOfGame,
};
