import _ from 'lodash';

import BaseObject from '../base-object/base-object.js';

import BoxscorePlayer from '../boxscore-player/boxscore-player.js';
import Team from '../team/team.js';

/**
 * Represents a team in a boxscore. Data must be manually passed on `teamBoxscore` and
 * `matchupScore` attributes.
 *
 * @extends BaseObject
 */
class BoxscoreTeam extends BaseObject {
  constructor(options = {}) {
    super(options);

    /**
     * Id of the league to which the parent boxscore belongs. Used for grabbing cached Teams.
     * @type {number}
     */
    this.leagueId = options.leagueId;

    /**
     * Id of the season to which the parent boxscore belongs. Used for grabbing cached Teams.
     * @type {number}
     */
    this.seasonId = options.seasonId;
  }

  static displayName = 'BoxscoreTeam';

  /**
   * @typedef {object} BoxscoreTeamObject
   *
   * @property {Team} team The team instance with the generic team data.
   *
   * @property {number} matchupScore The team's score in the `matchupPeriod` of the boxscore.
   * @property {number} weekScore The team's score in the `scoringPeriod` of the boxscore.
   * @property {number} weekProjectedScore The team's projected score in the `scoringPeriod` of the
   *                                       boxscore.
   * @property {number} weekBenchScore The score of the team's bench in the `scoringPeriod` of the
   *                                   boxscore.
   * @property {number} weekBenchProjectedScore The projected score of the team's bench in the
   *                                            `scoringPeriod` of the boxscore.
   *
   * @property {BoxscorePlayer[]} players An array of the team's players in the boxscore. The player
   *                                      may be an empty bench player which will have sparse data.
   *                                      Specifically, only the `position` attribute will be
   *                                      populated with the `Bench` value while the other values
   *                                      on BoxscorePlayer will be undefined or empty instances.
   */

  /**
    * @type {BoxscoreTeamObject}
    */
  static responseMap = {
    team: {
      key: 'teamBoxscore',
      manualParse: (responseData, response, constructorParams) => {
        if (_.isEmpty(responseData)) {
          return undefined;
        }

        const cachingId = Team.getCacheId(
          _.assign({}, constructorParams, { teamId: responseData.teamId })
        );
        return Team.get(cachingId) || Team.buildFromServer(responseData.team, constructorParams);
      }
    },

    matchupScore: 'matchupScore',
    weekScore: 'teamBoxscore.appliedActiveRealTotal',
    weekProjectedScore: 'teamBoxscore.appliedActiveProjectedTotal',
    weekBenchScore: 'teamBoxscore.appliedInactiveRealTotal',
    weekBenchProjectedScore: 'teamBoxscore.appliedInactiveProjectedTotal',

    players: {
      key: 'teamBoxscore.slots',
      BaseObject: BoxscorePlayer,
      isArray: true
    }
  };
}

export default BoxscoreTeam;
