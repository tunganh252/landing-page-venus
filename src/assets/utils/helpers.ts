import { COMPANY_MAIL } from './constant';

export const helpers = {
  validateEmail: function (email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  genMailData: function (subject: string, msg: string) {
    return `mailto:${COMPANY_MAIL}?subject=${subject ? subject : ''}&body=${
      msg ? msg : ''
    }`;
  },
};
