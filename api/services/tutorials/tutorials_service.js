const TUTORIALS = {
  DAM: [
    {
      id: 0,
      title: 'Agent 0:53 by Wodahs',
      url: 'https://www.youtube.com/watch?v=WcFxJB0AtIE',
      checkpoints: [{ time: '0:00', seconds: 0, label: 'Start' }, { time: '1:50', seconds: 110, label: 'Check 1' }],
    },
    {
      id: 1,
      title: '00 sub 2:00 by Jim',
      url: 'https://www.youtube.com/watch?v=yfrvHO99mks',
      checkpoints: [{ time: '0:00', seconds: 0, label: 'Start' }, { time: '1:50', seconds: 110, label: 'Check 1' }],
    },
  ],
  FACILITY: [
    {
      id: 2,
      title: 'Agent 0:43 by Luke',
      url: 'https://www.youtube.com/watch?v=-ssOL4oScoQ',
      checkpoints: [{ time: '0:00', seconds: 0, label: 'Start' }, { time: '1:50', seconds: 110, label: 'Check 1' }],
    },
    {
      id: 3,
      title: 'Agent 44-51 by Goose',
      url: 'https://www.youtube.com/watch?v=0PdSH7iJv4A',
      checkpoints: [{ time: '0:00', seconds: 0, label: 'Start' }, { time: '1:50', seconds: 110, label: 'Check 1' }],
    },
  ],
};

const fetchTutorials = async (level) => {
  if (level.toUpperCase() in TUTORIALS) {
    return TUTORIALS[level.toUpperCase()];
  }
  return [];
};

module.exports = {
  fetchTutorials,
};
