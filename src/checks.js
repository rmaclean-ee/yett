import { patterns, TYPE_ATTRIBUTE } from './variables';

export const isOnBlocklist = (src, type) =>
  src &&
  (!type || type !== TYPE_ATTRIBUTE) &&
  (!patterns.blocklist || patterns.blocklist.some((pattern) => pattern.test(src)));
