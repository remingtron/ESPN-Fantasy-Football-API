import BoxscorePlayerPointStats
  from '../boxscore-player-point-stats/boxscore-player-point-stats.js';
import Player from '../player/player.js';

/**
 * Use your editor's collapse functionality to collapse `serverResponse` and make this easier to
 * read/edit.
 */

const localObject = {
  isLocked: true,
  player: new Player({
    eligiblePositions: [
      'QB',
      'Bench'
    ],
    firstName: 'Aaron',
    isActive: true,
    isDroppable: undefined,
    isIREligible: false,
    jerseyNumber: '12',
    lastName: 'Rodgers',
    percentOwned: 99.21669,
    percentOwnedChange: 0.23744,
    percentStarted: 74.42904,
    playerId: 8439
  }),
  position: 'QB',
  projectedPoints: 20.46,
  projectedStats: new BoxscorePlayerPointStats({
    defensive0PointsAllowed: undefined,
    defensive100To199YardsAllowed: undefined,
    defensive14To17PointsAllowed: undefined,
    defensive1To6PointsAllowed: undefined,
    defensive200To299YardsAllowed: undefined,
    defensive28To34PointsAllowed: undefined,
    defensive350To399YardsAllowed: undefined,
    defensive35To45PointsAllowed: undefined,
    defensive400To449YardsAllowed: undefined,
    defensive450To499YardsAllowed: undefined,
    defensive500To549YardsAllowed: undefined,
    defensive7To13PointsAllowed: undefined,
    defensiveBlockedKickForTouchdowns: undefined,
    defensiveBlockedKicks: undefined,
    defensiveFumbles: undefined,
    defensiveInterceptions: undefined,
    defensiveOver550YardsAllowed: undefined,
    defensiveSacks: undefined,
    defensiveSafeties: undefined,
    fumbleReturnTouchdown: undefined,
    interceptionReturnTouchdown: undefined,
    kickoffReturnTouchdown: undefined,
    lostFumbles: -0.47,
    madeExtraPoints: undefined,
    madeFieldGoalsFrom40To49: undefined,
    madeFieldGoalsFrom50Plus: undefined,
    madeFieldGoalsFromUnder40: undefined,
    missedExtraPoints: undefined,
    missedFieldGoals: undefined,
    passing2PtConversions: 0.19,
    passingInterceptions: -0.76,
    passingTouchdowns: 7.87,
    passingYards: 11.21,
    puntReturnTouchdown: undefined,
    receiving2PtConversions: undefined,
    receivingReceptions: undefined,
    receivingTouchdowns: undefined,
    receivingYards: undefined,
    rushing2PtConversions: 0.01,
    rushingTouchdowns: 0.67,
    rushingYards: 1.73
  }),
  stats: new BoxscorePlayerPointStats({
    defensive0PointsAllowed: undefined,
    defensive100To199YardsAllowed: undefined,
    defensive14To17PointsAllowed: undefined,
    defensive1To6PointsAllowed: undefined,
    defensive200To299YardsAllowed: undefined,
    defensive28To34PointsAllowed: undefined,
    defensive350To399YardsAllowed: undefined,
    defensive35To45PointsAllowed: undefined,
    defensive400To449YardsAllowed: undefined,
    defensive450To499YardsAllowed: undefined,
    defensive500To549YardsAllowed: undefined,
    defensive7To13PointsAllowed: undefined,
    defensiveBlockedKickForTouchdowns: undefined,
    defensiveBlockedKicks: undefined,
    defensiveFumbles: undefined,
    defensiveInterceptions: undefined,
    defensiveOver550YardsAllowed: undefined,
    defensiveSacks: undefined,
    defensiveSafeties: undefined,
    fumbleReturnTouchdown: undefined,
    interceptionReturnTouchdown: undefined,
    kickoffReturnTouchdown: undefined,
    lostFumbles: undefined,
    madeExtraPoints: undefined,
    madeFieldGoalsFrom40To49: undefined,
    madeFieldGoalsFrom50Plus: undefined,
    madeFieldGoalsFromUnder40: undefined,
    missedExtraPoints: undefined,
    missedFieldGoals: undefined,
    passing2PtConversions: undefined,
    passingInterceptions: undefined,
    passingTouchdowns: undefined,
    passingYards: 1.04,
    puntReturnTouchdown: undefined,
    receiving2PtConversions: undefined,
    receivingReceptions: undefined,
    receivingTouchdowns: undefined,
    receivingYards: undefined,
    rushing2PtConversions: undefined,
    rushingTouchdowns: undefined,
    rushingYards: undefined
  }),
  totalPoints: 1.04
};

const serverResponse = {
  currentPeriodRealStats: {
    appliedStatTotal: 1.04,
    appliedStats: {
      3: 1.04
    },
    rawStats: {
      0: 5,
      64: 1,
      1: 3,
      2: 2,
      3: 26,
      5: 5,
      6: 2,
      22: 26,
      7: 1,
      8: 1,
      156: 1
    }
  },
  lockStatus: 4,
  currentPeriodProjectedStats: {
    appliedStatTotal: 20.46,
    appliedStats: {
      3: 11.21,
      19: 0.19,
      4: 7.87,
      20: -0.76,
      24: 1.73,
      72: -0.47,
      25: 0.67,
      26: 0.01,
      63: 0.01
    },
    rawStats: {
      0: 36.93216,
      64: 2.76944,
      1: 23.05632,
      65: 0.45769,
      2: 13.87585,
      66: 0.03493,
      3: 280.2002,
      4: 1.96699,
      68: 0.49262,
      5: 56,
      69: 0.21969,
      6: 28,
      70: 0.01607,
      7: 14,
      8: 11,
      72: 0.23576,
      9: 5,
      73: 0.61653,
      10: 2,
      11: 4,
      12: 2,
      13: 2,
      14: 1,
      15: 0.26021,
      16: 0.17004,
      17: 0.34789,
      18: 0.04699,
      19: 0.09617,
      20: 0.38076,
      21: 0.62429,
      22: 280.2002,
      23: 3.03034,
      24: 17.28127,
      25: 0.11167,
      26: 0.00515,
      27: 3,
      28: 1,
      35: 0.00571,
      36: 0.004,
      37: 0.01297,
      38: 0.00044,
      39: 5.70275,
      40: 17.28127,
      62: 0.10132,
      63: 0.00194
    }
  },
  proGameIds: [
    381230009
  ],
  opponentProTeamId: 8,
  isQueuedWaiverLocked: false,
  isTradeLocked: false,
  watchList: false,
  pvoRank: 21,
  slotCategoryId: 0,
  isKeeper: false,
  player: {
    lastName: 'Rodgers',
    percentOwned: 99.21669,
    lastNewsDate: '2018-12-30T20:26:53.000Z',
    universeId: 2,
    isActive: true,
    jersey: '12',
    isIREligible: false,
    playerRatingSeason: 311.5400085449219,
    value: -1,
    playerId: 8439,
    percentChange: 0.23744,
    lastVideoDate: '2018-01-17T01:06:49.053Z',
    percentStarted: 74.42904,
    droppable: true,
    firstName: 'Aaron',
    defaultPositionId: 1,
    positionRank: 4,
    healthStatus: 2,
    draftRank: 22.2,
    totalPoints: 311.5400085449219,
    eligibleSlotCategoryIds: [
      0,
      20
    ],
    proTeamId: 9,
    tickerId: 2129320,
    sportsId: 8439,
    gameStarterStatus: -2147483648
  }
};

export { localObject, serverResponse };
