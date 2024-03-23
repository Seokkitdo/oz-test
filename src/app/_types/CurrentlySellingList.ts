/**
 * @typedef {Object} compSchedulesData
 * @property {string} itemCode 아이템코드[0]
 * @property {string} itemName 아이템명[1]
 * @property {number} gameName 경기명[2]
 * @property {number} gameDate 경기일시[3]
 * @property {string} endDate 종료일시[4]
 * @property {string} unsetEndDate 종료일시[5]
 * @property {string} leagueCode 리그코드[6]
 * @property {string} leagueName 리그명[7]
 * @property {boolean} domastic 국내외[8]
 * @property {boolean} managedLeague 관리리그[9]
 * @property {string} meetStadiumFullName 경기장명[10]
 * @property {string} matchSeq 경기순번[11]
 * @property {string} homeId 홈팀아이디[12]
 * @property {string} awayId 원정팀아이디[13]
 * @property {string} homeName 홈팀명[14]
 * @property {string} awayName 원정팀명[15]
 * @property {number} winAllot 승무패 배당률[16]
 * @property {number} drawAllot 승무패 배당률[17]
 * @property {number} loseAllot 승무패 배당률[18
 * @property {number} handi 핸디캡[19]
 * @property {number} winHandi 핸디캡 배당률[20]
 * @property {number} drawHandi 핸디캡 배당률[21]
 * @property {number} loseHandi 핸디캡 배당률[22]
 * @property {string} neutral 중립장소[23]
 * @property {string} noticeNo 공지번호[24]
 * @property {string} gameReject 경기거부[25]
 * @property {string} buyReject 구매거부[26]
 * @property {string} protoStatus 프로토상태[27]
 * @property {string} gameResult 경기결과[28]
 * @property {string} gameSubject 경기주제[29]
 * @property {string} live 라이브[30]
 * @property {string} sgl 단일[31]
 * @property {string} unsetSchedule 미정경기[32]
 * @property {string} mchScore 경기결과[33]
 */

interface ComSchedules {
  keys: string[];
  datas: any[][];
}
interface LiveInfo {
  currentLottery: string;
  tooltipList: string[];
  gmTs: string;
  voteStatus: string;
  compSchedules: ComSchedules;
}

export interface IProtoMain {
  from: string;
  liveId: string;
  liveInfo: LiveInfo[];
}
