import { YUEBING_LOCALES } from "yuebing-messages";

// note: title is an alias for label, this is convenient for v-select
export const LOCALE_ITEMS = YUEBING_LOCALES.map((loc) => ({
  value: loc,
  label: `locale_${loc}`,
  title: `locale_${loc}`,
}));

export const EMAIL_REGEX = /^[A-Z\d][A-Z\d._%+-]*@[A-Z\d.-]+\.[A-Z]{2,24}$/i;
export const LIST_OF_EMAILS_REGEX = /^\s*([A-Z\d][A-Z\d._%+-]*@[A-Z\d.-]+\.[A-Z]{2,24}\s*,?\s*)+$/im;

// export const URL_PART_REGEX = /[A-Z\d._-]+/i

// we exclude some legal path chars that might be useful for injection attacks
export const PATH_REGEX = /[A-Z\d-._()+=:@/]*/i;

// Sometimes we need regex validation and the regex contains a pipe character.
// The pipe breaks vee-validation rule parsing, so we use these custom rules.
export const REGEX_VALIDATORS = {
  locale: /^[a-z]{2,3}(_[A-Z]{2,3})?$/,
  username: /^[A-Z][A-Z\d-._]+$/i,
  email: EMAIL_REGEX,
  host: /^([A-Z\d]{1,63}|[A-Z\d][A-Z\d-]{0,61}[A-Z\d])(.([A-Z\d]{1,63}|[A-Z\d][A-Z\d-]{0,61}[A-Z\d]))*$/i,
  url: /^https?:\/\/[A-Z\d]+(\.[-A-Z\d]+)+(:\d{2,5})?(\/[A-Z\d.+&@#/%=~_|]*)?$/i,
  raw_hex: /^[\dA-F]+$/i,
  hex: /^(0x)?[\dA-F]+$/i,
  volume: /^[A-Z\d._-]+$/i,
  local_path: /^[A-Z\d ()=.,_+@/-]+$/i,
  file_mode: /^[01][0-7]{3}$/,
  aws_key: /^AKIA[A-Z\d]{16}$/,
  aws_secret: /^[A-Z\d/+=]{40}$/,
  s3_bucket: /^[a-z\d.-]{3,63}$/,
  b2_bucket: /$[a-z\d-]{6,63}$/i,
  path: PATH_REGEX,
};

export const isExactRegexMatch = (value: string, regex: RegExp): boolean => {
  const match = value.match(regex);
  return !!(match && match.length === 1 && match[0].length === value.length);
};

export const isValidEmail = (value: string): boolean => isExactRegexMatch(value, EMAIL_REGEX);

export const NORMALIZE_LOWERCASE = async (v: unknown): Promise<string> =>
  Promise.resolve(`${v ? v : typeof v === "undefined" ? "undefined" : v == null ? "null" : v}`.toLowerCase());

// find valid emails in some muck
// if muck is a string, it is split into tokens: whitespace, commas and angle-brackets. it is now an array
// when muck is an array, things that are not email addresses are filtered out
// when muck is neither a string nor an array, an empty array is returned
export const findValidEmails = (muck: string | string[], splitOn = /[\s,<>]+/g): string[] => {
  const list = typeof muck === "string" ? muck.split(splitOn) : Array.isArray(muck) ? muck : [];
  return list.filter((e) => isValidEmail(e));
};
