/**
 * 최근 경기 기록 아이템 타입
 * @property {string} gmId - 종목 아이디(G101) = 프로토
 * @property {number} gmTs
 * @property {number} gmOsidTs
 * @property {number} OsidTsYear
 * @property {number} SaleStartDate
 * @property {number} SaleEndDate
 * @property {string} SaleStatus
 * @property {number} gaOsidTsPlayNo

 */

export type TRoundItem = {
  gmId: string;
  gmTs: number;
  gmOsidTs: number;
  gmOsidTsYear: number;
  saleStartDate: number;
  saleEndDate: number;
  saleStatus: string;
  gmOsidTsPlayNo: number;
};

export type TAllProtoRoundItem = {
  lotterySchedulesList: TRoundItem[];
  rsMsg: {
    sessionInterval: string;
    message: string;
    statusCode: string;
  };
};
