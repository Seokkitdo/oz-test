/**
 * 최근 경기 기록 아이템 타입
 * @property {string} GAME_RESULT - 게임 결과 (2: 패 / 0: 승)
 * @property {string} HOME_TEAM - 홈팀
 * @property {string} AWAY_TEAM - 원정팀
 * @property {number} HANDI_LOSE - 핸디캡 패
 * @property {string} MCH_DTM - 경기 일자
 * @property {string} WL_RSLT_ANNC_DTM
 * @property {number} ODDS_DRAW - 무승부 배당률
 * @property {number} ODDS_WIN - 승리 배당률
 * @property {number} ODDS_LOSE - 패배 배당률
 * @property {number} HANDI_VAL - 핸디캡 값
 * @property {number} HANDI_DRAW - 핸디캡 무승부
 * @property {number} GM_TS
 * @property {number} GM_SEQ
 * @property {string} MCH_SCORE - 매치 스코어
 * @property {string} GM_ID
 * @property {string} GM_LEAG_CD
 * @property {number} HANDI_WIN - 핸디캡 승리
 * @property {string} PR_LL_WIN_LEAG_NM - 대회명
 * @property {string} MCH_SPORT_CD
 */
export type TRecentMatchRecordItem = {
  GAME_RESULT: string; // 2 : 승  /  0  패
  HOME_TEAM: string; // 홈팀
  AWAY_TEAM: string; // 원정팀
  HANDI_LOSE: number;
  MCH_DTM: string; // 경기일자
  WL_RSLT_ANNC_DTM: string;
  ODDS_DRAW: number; // 배당률 무
  ODDS_WIN: number; // 배당률 승
  ODDS_LOSE: number; // 배당률 패
  HANDI_VAL: number; // 14 : 승5패
  HANDI_DRAW: number;
  GM_TS: number;
  GM_SEQ: number;
  MCH_SCORE: string; // 적중결과
  GM_ID: string;
  GM_LEAG_CD: string;
  HANDI_WIN: number;
  PR_LL_WIN_LEAG_NM: string; // 대회명

  MCH_SPORT_CD: string;
};

export type TrecentMatchRecordQuery = {
  winOdds: string;
  loseOdds: string;
  drawOdds: string;
  gmType: string;
  teamId1: string;
  teamId2: string;
  gmTs: string;
  matchSeq: string;
};
