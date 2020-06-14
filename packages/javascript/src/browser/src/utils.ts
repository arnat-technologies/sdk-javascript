import { BROWSER_ALIASES_MAP, BROWSER_MAP } from './constants';

/**
 * Get first matched item for a string
 * @param RegExp regexp
 * @param String ua
 * @returns {Array|{index: number, input: string}|*|boolean|string}
 */
export const getFirstMatch = (regexp, ua): string => {
  const match = ua.match(regexp);
  return (match && match.length > 0 && match[1]) || '';
};

/**
 * Get second matched item for a string
 * @param regexp
 * @param String ua
 * @return {Array|{index: number, input: string}|*|boolean|string}
 */
export const getSecondMatch = (regexp, ua): string => {
  const match = ua.match(regexp);
  return (match && match.length > 1 && match[2]) || '';
};

/**
 * Match a regexp and return a constant or undefined
 * @param RegExp regexp
 * @param String ua
 * @param {*} _const Any const that will be returned if regexp matches the string
 * @return *
 */
export const matchAndReturnConst = (regexp, ua, _const) => {
  if (regexp.test(ua)) {
    return _const;
  }
  return void 0;
};

export const getWindowsVersionName = (version: string): string | undefined => {
  switch (version) {
    case 'NT':
      return 'NT';
    case 'XP':
      return 'XP';
    case 'NT 5.0':
      return '2000';
    case 'NT 5.1':
      return 'XP';
    case 'NT 5.2':
      return '2003';
    case 'NT 6.0':
      return 'Vista';
    case 'NT 6.1':
      return '7';
    case 'NT 6.2':
      return '8';
    case 'NT 6.3':
      return '8.1';
    case 'NT 10.0':
      return '10';
    default:
      return undefined;
  }
};

/**
 * Get macOS version name
 *    10.5 - Leopard
 *    10.6 - Snow Leopard
 *    10.7 - Lion
 *    10.8 - Mountain Lion
 *    10.9 - Mavericks
 *    10.10 - Yosemite
 *    10.11 - El Capitan
 *    10.12 - Sierra
 *    10.13 - High Sierra
 *    10.14 - Mojave
 *    10.15 - Catalina
 *
 * @example
 *   getMacOSVersionName("10.14") // 'Mojave'
 *
 * @param  {string} version
 * @return {string} versionName
 */
export const getMacOSVersionName = (version: string): string | undefined => {
  const v = version
    .split('.')
    .splice(0, 2)
    .map((s) => parseInt(s, 10) || 0);
  v.push(0);
  if (v[0] !== 10) return undefined;
  switch (v[1]) {
    case 5:
      return 'Leopard';
    case 6:
      return 'Snow Leopard';
    case 7:
      return 'Lion';
    case 8:
      return 'Mountain Lion';
    case 9:
      return 'Mavericks';
    case 10:
      return 'Yosemite';
    case 11:
      return 'El Capitan';
    case 12:
      return 'Sierra';
    case 13:
      return 'High Sierra';
    case 14:
      return 'Mojave';
    case 15:
      return 'Catalina';
    default:
      return undefined;
  }
};

/**
 * Get Android version name
 *    1.5 - Cupcake
 *    1.6 - Donut
 *    2.0 - Eclair
 *    2.1 - Eclair
 *    2.2 - Froyo
 *    2.x - Gingerbread
 *    3.x - Honeycomb
 *    4.0 - Ice Cream Sandwich
 *    4.1 - Jelly Bean
 *    4.4 - KitKat
 *    5.x - Lollipop
 *    6.x - Marshmallow
 *    7.x - Nougat
 *    8.x - Oreo
 *    9.x - Pie
 *
 * @example
 *   getAndroidVersionName("7.0") // 'Nougat'
 *
 * @param  string version
 * @return string versionName
 */
export const getAndroidVersionName = (version: string): string | undefined => {
  const v = version
    .split('.')
    .splice(0, 2)
    .map((s) => parseInt(s, 10) || 0);
  v.push(0);
  if (v[0] === 1 && v[1] < 5) return undefined;
  if (v[0] === 1 && v[1] < 6) return 'Cupcake';
  if (v[0] === 1 && v[1] >= 6) return 'Donut';
  if (v[0] === 2 && v[1] < 2) return 'Eclair';
  if (v[0] === 2 && v[1] === 2) return 'Froyo';
  if (v[0] === 2 && v[1] > 2) return 'Gingerbread';
  if (v[0] === 3) return 'Honeycomb';
  if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';
  if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';
  if (v[0] === 4 && v[1] >= 4) return 'KitKat';
  if (v[0] === 5) return 'Lollipop';
  if (v[0] === 6) return 'Marshmallow';
  if (v[0] === 7) return 'Nougat';
  if (v[0] === 8) return 'Oreo';
  if (v[0] === 9) return 'Pie';
  return undefined;
};

/**
 * Get version precisions count
 *
 * getVersionPrecision("1.10.3") // 3
 *
 * @param string version
 * @returns number
 */
export const getVersionPrecision = (version: string): number => version.split('.').length;

/**
 * Calculate browser version weight
 *
 * @example
 *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
 *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
 *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
 *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
 *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
 *
 * @param {String} versionA versions versions to compare
 * @param {String} versionB versions versions to compare
 * @param {boolean} [isLoose] enable loose comparison
 * @return {Number} comparison result: -1 when versionA is lower,
 * 1 when versionA is bigger, 0 when both equal
 */
/* eslint consistent-return: 1 */
export const compareVersions = (versionA, versionB, isLoose = false) => {
  // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
  const versionAPrecision = getVersionPrecision(versionA);
  const versionBPrecision = getVersionPrecision(versionB);

  let precision = Math.max(versionAPrecision, versionBPrecision);
  let lastPrecision = 0;

  const chunks = [versionA, versionB].map((version) => {
    const delta = precision - getVersionPrecision(version);

    // 2) "9" -> "9.0" (for precision = 2)
    const _version = version + new Array(delta + 1).join('.0');

    // 3) "9.0" -> ["000000000"", "000000009"]
    return _version
      .split('.')
      .map((chunk) => new Array(20 - chunk.length).join('0') + chunk)
      .reverse();
  });

  // adjust precision for loose comparison
  if (isLoose) {
    lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
  }

  // iterate in reverse order by reversed chunks array
  precision -= 1;
  while (precision >= lastPrecision) {
    // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
    if (chunks[0][precision] > chunks[1][precision]) {
      return 1;
    }

    if (chunks[0][precision] === chunks[1][precision]) {
      if (precision === lastPrecision) {
        // all version chunks are same
        return 0;
      }

      precision -= 1;
    } else if (chunks[0][precision] < chunks[1][precision]) {
      return -1;
    }
  }

  return undefined;
};

/**
 * Get short version/alias for a browser name
 *
 * @example
 *   getBrowserAlias('Microsoft Edge') // edge
 *
 * @param  {string} browserName
 * @return {string}
 */
export const getBrowserAlias = (browserName: string): string => BROWSER_ALIASES_MAP[browserName];

/**
 * Get short version/alias for a browser name
 *
 * getBrowserAlias('edge') // Microsoft Edge
 *
 * @param  string browserAlias
 * @returns string
 */
export const getBrowserTypeByAlias = (browserAlias: string): string =>
  BROWSER_MAP[browserAlias] || '';