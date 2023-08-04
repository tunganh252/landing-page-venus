import { COMPANY_MAIL } from "./constant";

export const helpers = {
  genMailData: function (subject: string, msg: string) {
    return `mailto:${COMPANY_MAIL}?subject=${subject ? subject : ""}&body=${
      msg ? msg : ""
    }`;
  },
};
